# Repository Guidelines

## Project Structure & Module Organization
The public entry point is `index.html`, which bootstraps Leaflet, loads the prefecture consumption dataset, and wires UI interactions. Shared data lives in `consumption.js`; keep regional keys in Japanese to align with map tooltips and external datasets. Static assets such as hero visuals belong alongside `image.png` in the repository root. When adding new scripts, prefer colocating lightweight modules next to `index.html` and importing them via relative paths to keep the deployment-friendly single-page layout.

## Build, Test, and Development Commands
- `python -m http.server 8000` (from the repo root) starts a local server that avoids CORS noise when fetching GeoJSON or CDN assets.
- `npx http-server` offers the same behavior for Node-centric workflows; install once with `npm install -g http-server` if you plan to reuse it.
- `open index.html` (macOS), `xdg-open index.html` (Linux), or `start index.html` (Windows) is acceptable for quick smoke checks, though a server is preferred before shipping changes.

## Coding Style & Naming Conventions
JavaScript files use 2-space indentation and `const` for immutable bindings. Favor descriptive camelCase identifiers for variables and functions (e.g., `renderLegend`, `updatePrefecturePanel`). Keep data structures as plain objects so they remain serializable. When extending CSS inside `<style>` tags, respect the existing BEM-like class names and keep color tokens defined once to simplify palette adjustments.

## Testing Guidelines
There is no automated suite today, so run a manual pass after each substantial change: load the page, verify the map paints without console errors, hover a high and low consumption prefecture, trigger a popup click, and confirm the legend updates. If you introduce computation-heavy logic, add lightweight unit tests via a minimal harness (e.g., Vitest) placed under `tests/` and document the command here.

## Commit & Pull Request Guidelines
Write focused commits with imperative subject lines under 72 characters (e.g., `Add butter consumption legend`). Reference related issues in the body using `Refs #123` when applicable. Pull requests should explain the user-facing impact, list manual verification steps, and attach screenshots or GIFs whenever the UI changes. Ensure the branch is rebased on `main` before requesting review, and confirm assets and dataset sources are cited in the description.
