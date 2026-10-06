#!/usr/bin/env python3
"""Deny writes into the notes vault. Reads stay allowed."""

import json
import os
import re
import sys
from pathlib import Path

WRITE_TOOLS = {"write", "strreplace", "delete", "editnotebook"}
PATH_KEYS = {"path", "file_path", "target_notebook", "notebook_path", "target_file", "file"}
WRITE_MARKERS = (
    ">",
    "set-content",
    "add-content",
    "out-file",
    "new-item",
    "remove-item",
    "move-item",
    "copy-item",
    "rename-item",
    "clear-content",
    "set-item",
    "tee-object",
    "mkdir",
    "rmdir",
    "del ",
    "erase ",
    " ni ",
    " rm ",
    " mv ",
    " cp ",
)
READ_STARTS = ("rg ", "rg.exe", "get-childitem", "get-content", "select-string", "dir ", "type ", "findstr")


def emit(payload):
    sys.stdout.buffer.write((json.dumps(payload) + "\n").encode("utf-8"))
    sys.stdout.buffer.flush()


def allow():
    emit({"permission": "allow"})


def deny():
    emit(
        {
            "permission": "deny",
            "user_message": "The notes vault is read-only.",
            "agent_message": "The notes vault is read-only. Read it for existing buckets. Write the lesson under lessons/ in the workspace.",
        }
    )


def canon(raw):
    text = str(raw).strip()
    while len(text) >= 2 and text[0] == text[-1] and text[0] in "\"'":
        text = text[1:-1].strip()
    text = text.replace("\\", "/")
    if text.lower().startswith("//?/"):
        text = text[4:]
    text = re.sub(r"/{2,}", "/", text)
    return text.lower().rstrip("/")


def load_vault():
    file = Path.home() / ".cursor" / "learn" / "vault.json"
    try:
        data = json.loads(file.read_text(encoding="utf-8-sig"))
    except (OSError, json.JSONDecodeError):
        return ""
    path = data.get("path") if isinstance(data, dict) else None
    if not isinstance(path, str) or not path.strip():
        return ""
    return canon(path)


def under_vault(raw, vault):
    candidate = canon(raw)
    return candidate == vault or candidate.startswith(vault + "/")


def collect_paths(value, found):
    if isinstance(value, list):
        for item in value:
            collect_paths(item, found)
        return
    if not isinstance(value, dict):
        return
    for key, item in value.items():
        if key.lower() in PATH_KEYS and isinstance(item, str):
            found.append(item)
        else:
            collect_paths(item, found)


def tool_targets_vault(payload, vault):
    paths = []
    collect_paths(payload.get("tool_input") or payload.get("arguments") or {}, paths)
    cwd = str(payload.get("cwd") or "")
    for raw in paths:
        if under_vault(raw, vault):
            return True
        if cwd and not os.path.isabs(str(raw)) and under_vault(str(Path(cwd) / str(raw)), vault):
            return True
    return False


def shell_targets_vault(command, vault):
    folded = canon(command)
    if vault not in folded:
        return False
    lowered = command.lower()
    if any(marker in lowered for marker in WRITE_MARKERS):
        return True
    stripped = lowered.lstrip()
    if stripped.startswith(READ_STARTS):
        return False
    return True


def main():
    raw = sys.stdin.buffer.read().decode("utf-8-sig")
    try:
        payload = json.loads(raw) if raw.strip() else {}
    except json.JSONDecodeError:
        allow()
        return
    if not isinstance(payload, dict):
        allow()
        return
    vault = load_vault()
    if not vault:
        allow()
        return
    event = str(payload.get("hook_event_name") or "")
    tool = str(payload.get("tool_name") or "")
    if event == "beforeShellExecution" or (not tool and "command" in payload):
        if shell_targets_vault(str(payload.get("command") or ""), vault):
            deny()
            return
        allow()
        return
    tool = tool.lower()
    if tool in WRITE_TOOLS and tool_targets_vault(payload, vault):
        deny()
        return
    allow()


if __name__ == "__main__":
    try:
        main()
    except Exception:
        deny()
