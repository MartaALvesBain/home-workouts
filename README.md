# Home Strength — GitHub Pages fixed build

This build fixes the startup crash reported as `React.createRef is not a function` and removes Fragment usage that was incompatible with the embedded React runtime.

## Replace the deployed files
1. In your `home-workouts` GitHub repository, replace the old `index.html` and `sw.js` with the files in this folder.
2. You can also upload `manifest.webmanifest`, `.nojekyll`, and `icons/` again; they are unchanged.
3. Commit to `main`.
4. Wait for GitHub Pages deployment to finish, then open the site and refresh.
5. If an installed Home Screen version still shows the old error, close it completely and reopen it. If needed, open the site once in Safari/Chrome and refresh so the new service worker takes control.

Workout logs remain in browser localStorage. Replacing the site files does not intentionally erase them.
