# Lab: Getting Stylish

[Click here to see the deployed site](https://chen-daily-xkcd.vercel.app)

## Overview

React/NextJS web applications handle things differently than web apps of the past. But that doesan’t mean they still can’t look good.

It’s time to add some style to our components.

## Feature Tasks and Requirements

Modify your existing NextJS client app to style it with Sass.

The style you add can be “hand rolled” without the use of additional styling libraries. But you can also leverage other tools if you like.

Go live.

## Implementation Notes

- You won’t be graded on how “good” it looks, but on your use of Sass thoughout the app.
  - In other words, you want to add color to your app, the exact colors you choose is up to you.
  - But do your best to have it look good.

## User Acceptance Tests

No automated tests. But application must be deployed.

# Lab: React III - Next.js

[Click here to see the deployed site](https://chen-comics.herokuapp.com)

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
