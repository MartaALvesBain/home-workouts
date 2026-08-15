# Home Strength — GitHub Pages build

This version is designed specifically for GitHub Pages. The React app, workout data, and CSS are bundled into a single `index.html` to avoid asset path problems.

## Deploy

1. In your GitHub repository, delete the old app files from the repository root.
2. Upload **the contents of this folder** to the repository root. Do not upload the enclosing folder itself.
3. Confirm that `index.html`, `manifest.webmanifest`, `sw.js`, `.nojekyll`, and the `icons` folder are visible at the top level of the repository.
4. Commit the changes.
5. In Settings → Pages, use **Deploy from a branch**, branch `main`, folder `/ (root)`.
6. Open the GitHub Pages URL in a private/incognito tab first to avoid an old service-worker cache.
