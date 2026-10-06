import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { parseArgs, findPackageRoot, fail, succeed } from "./render-common.mjs"

const { source, out } = parseArgs()
const root = findPackageRoot(path.dirname(fileURLToPath(import.meta.url)))
if (!existsSync(source)) fail(`source not found: ${source}`)

let Resvg
try {
  const imported = await import("@resvg/resvg-js")
  Resvg = imported.Resvg ?? imported.default?.Resvg
  if (!Resvg) fail(`svg renderer under ${root} did not export Resvg`)
} catch (error) {
  fail(`svg renderer not installed under ${root}: ${error.message}`)
}

const svg = readFileSync(source)
const resvg = new Resvg(svg, {
  fitTo: { mode: "zoom", value: 2 },
  background: "white",
  font: { fontFamily: "sans-serif", loadSystemFonts: true },
})
mkdirSync(path.dirname(out), { recursive: true })
writeFileSync(out, resvg.render().asPng())
if (!existsSync(out) || readFileSync(out).length === 0) fail("svg render produced an empty file")
succeed(out)
