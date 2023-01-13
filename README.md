# invoice

## This project is built with

- Vue3 with composition api & script setup
- Typescript for typechecking
- Vue-Router for route navigation
- Pinia for state management
- Vue-Content-Loader for showing loader
- html2pdf from html to pdf convert
- Moment for date formate
- Use tailwindcss for design

## Main feature of this project

- Show list of card in root page
- On invoice btn click go to invoice page
- Can print & download the invoice from that page
- Fully typesafe
- Store data in pinia to stop redundant api call
- Show loader until initial data load from api call
- Add fallback route if path not found
- All props are typesafe with default value
- Fast navigation though route.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
