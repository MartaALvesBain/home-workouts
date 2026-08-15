# Home Strength mobile app

A minimalist React-based Progressive Web App (PWA) for the home and travel workout plan.

## What it does
- Home workouts A, B, C and optional Day D
- Two no-equipment travel workouts
- Exercise instructions in expandable “How to” sections
- Log weight, reps and completed sets
- Workout notes
- History and simple strength progress view
- 8-week progression selector
- Export/import local backup
- Front-end-only storage in the browser
- Offline support after first successful load

## Run locally
A PWA needs to be served over HTTP rather than opened directly as `file://`. From this folder, run:

    python3 -m http.server 8080

Then open `http://localhost:8080`.

## Put it on a phone
Deploy this entire folder to any static HTTPS host (for example your own static site host). Open the URL on the phone and use the browser’s “Add to Home Screen” / install action. No server-side application or database is required.

## Data
Workout data is stored in browser `localStorage` under `homeStrengthReactStateV1`. It does not sync between devices. Use Backup > Export periodically and Import when moving devices. The app also attempts to migrate data from the earlier `homeStrengthState` key when it is running under the same browser origin.
