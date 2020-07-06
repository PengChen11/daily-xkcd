# Lab: React III - Next.js

[Click here to see the deployed site]()

## Overview

Build a multi page web app using Next.js to consume an external API.

The app will display most recent XKCD comic and have links to previous 10 comics.

## Feature Tasks and Requirements

- Refer to [example site](https://xkcd-two.now.sh/)
- Web app should have 2 static routes
  - Home page at “/”
  - About page at “/about”
- Web app should have dynamic routes
  - Dynamic route should display a single comic

## Implementation Notes

- Refer to [XKCD API](https://xkcd.com/json.html)
  - Inspect the data returned to determine the dynamic links needed.
- Remember to edit package.json script section

## Stretch Goals

- Make a “hybrid” app where Home and About pages are statically generated
- Style using Sass instead of CSS
- Publish web app to the web
- Use alternate http client instead of axios
- HINT: check Next.js blog for help with the stretch goals

## Useful Terminal Commands

```bash
npm install react react-dom next axios

npm run dev
```

## User Acceptance Tests

No automated testing today. Your goal is to match appearance and functionality of reference web app.

## Configuration

Create Github repository named daily-xkcd
Submit pull request to completed project.
Don’t forget to add node_modules and .next folders to .gitignore
