// src/utils/asset.ts
// ─────────────────────────────────────────────────────────────
// Single source of truth for all public asset URLs.
// Vite replaces import.meta.env.BASE_URL at build time with
// whatever `base` is set to in vite.config.ts
//
// Examples (when base = "/My-Portfolio/"):
//   asset("hanane.jpg")              → "/My-Portfolio/hanane.jpg"
//   asset("projects/gcb-cover.png") → "/My-Portfolio/projects/gcb-cover.png"
//   asset("/dz-flag.png")           → "/My-Portfolio/dz-flag.png"
// ─────────────────────────────────────────────────────────────
export function asset(path: string): string {
  // BASE_URL always ends with "/" when set in vite.config.ts
  // Strip leading slash from path to avoid double slashes
  const cleanPath = path.replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}
