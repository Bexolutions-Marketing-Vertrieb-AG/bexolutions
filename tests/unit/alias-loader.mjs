import { pathToFileURL } from "node:url"

const root = new URL("../../", import.meta.url)

export function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith("~/")) {
    let rel = specifier.slice(2)
    if (!/\.[a-z]+$/i.test(rel)) rel += ".ts"
    return {
      url: new URL(rel, root).href,
      shortCircuit: true,
    }
  }
  if (specifier.startsWith("file:")) return nextResolve(specifier, context)
  return nextResolve(specifier, context)
}

export { pathToFileURL }
