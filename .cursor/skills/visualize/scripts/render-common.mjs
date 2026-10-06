import { existsSync } from "node:fs"
import path from "node:path"

export function parseArgs() {
  const args = process.argv.slice(2)
  let source = ""
  let out = ""
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--source") source = args[++i] ?? ""
    else if (args[i] === "--out") out = args[++i] ?? ""
  }
  if (!source || !out) fail("usage: node render-*.mjs --source <file> --out <png>")
  return { source: path.resolve(source), out: path.resolve(out) }
}

export function findPackageRoot(start) {
  let dir = start
  for (let i = 0; i < 8; i++) {
    if (existsSync(path.join(dir, "package.json"))) return dir
    const parent = path.dirname(dir)
    if (parent === dir) break
    dir = parent
  }
  return path.resolve(start, "..")
}

export function succeed(out) {
  process.stdout.write(`RESULT:\nfilename: ${path.basename(out)}\npath: ${out}\n`)
  process.exit(0)
}

export function fail(message) {
  process.stderr.write(`${message}\n`)
  process.exit(1)
}
