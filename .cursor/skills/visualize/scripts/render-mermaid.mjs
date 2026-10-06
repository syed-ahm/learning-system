import { spawn } from "node:child_process"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { parseArgs, findPackageRoot, fail, succeed } from "./render-common.mjs"

const CHROME = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
]

const { source, out } = parseArgs()
const root = findPackageRoot(path.dirname(fileURLToPath(import.meta.url)))
const binName = process.platform === "win32" ? "mmdc.cmd" : "mmdc"
const mmdc = path.join(root, "node_modules", ".bin", binName)
if (!existsSync(mmdc)) fail(`mermaid renderer not installed at ${mmdc}`)
if (!existsSync(source)) fail(`source not found: ${source}`)

const chrome = CHROME.find((candidate) => existsSync(candidate))
const configPath = path.join(tmpdir(), `mmdc-${process.pid}.json`)
writeFileSync(
  configPath,
  JSON.stringify(chrome ? { executablePath: chrome, args: ["--no-sandbox"] } : { args: ["--no-sandbox"] }),
)

mkdirSync(path.dirname(out), { recursive: true })
const args = ["-i", source, "-o", out, "-p", configPath, "-b", "white", "-s", "2"]
const quote = (value) => (process.platform === "win32" && /[\s"]/.test(value) ? `"${value.replaceAll('"', '\\"')}"` : value)
const child = spawn(quote(mmdc), args.map(quote), {
  cwd: root,
  windowsHide: true,
  shell: process.platform === "win32",
})

let stderr = ""
child.stderr.on("data", (chunk) => {
  stderr += chunk.toString()
})
const timer = setTimeout(() => child.kill(), 120000)
child.on("close", (code) => {
  clearTimeout(timer)
  if (code !== 0 || !existsSync(out) || readFileSync(out).length === 0) {
    fail(stderr.trim() || `mmdc exited ${code}`)
  }
  succeed(out)
})
