# Big0 Website

This is a Vite-powered React app.

## Requirements

- Node.js 18 or newer
- npm

## Install

```bash
npm install
```

## Run Locally

Start the development server:

```bash
npm run start
```

Open the app in your browser at the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Build For Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Preview The Production Build

```bash
npm run serve
```

## Lint

```bash
npm run lint
```

## Notes

- The app is configured to run with Vite, so Create React App commands such as `npm start`, `npm test`, and `npm run eject` do not apply here.
- The project includes client-side routing, so use the Vite dev server or a static host configured to serve `index.html` for unknown routes.