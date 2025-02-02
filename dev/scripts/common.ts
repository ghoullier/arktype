import { join } from "node:path"

const root = "."
const dev = "dev"
const arktypeIo = join(dev, "arktype.io")
const docsDir = join(arktypeIo, "docs")
const srcRoot = "src"
const outRoot = "dist"
const typesOut = join(outRoot, "types")
const mjsOut = join(outRoot, "mjs")
const cjsOut = join(outRoot, "cjs")

export const repoDirs = {
    root,
    dev,
    arktypeIo,
    docsDir,
    srcRoot,
    outRoot,
    typesOut,
    mjsOut,
    cjsOut
}
