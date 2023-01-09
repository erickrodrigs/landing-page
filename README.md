# Elo7 careers landing page

A Elo7 careers page created for the Front-End Software Engineer position at Elo7. The purpose of this project is to apply web development skills with HTML5, CSS and Javascript.

## Technologies stack

This project uses HTML5, CSS, Javascript, React.js and Jest.

## How to execute

There are two ways to execute the application.

1) Using docker-compose:
```
docker-compose up
```

2) Locally (node.js and npm need to be installed first):
```
npm start
```

To run the tests, you can use either `docker-compose run --rm web npm run test` or `npm run test`.

## Landing page

![Landing page](docs/vagas.png)

## Components architecture

Based on the landing page, the page components were defined as follows:

![Components architecture](docs/components.png)

## Folder structure

- `public/`: public files such as favicon.ico and index.html.
- `src/`:
  - `assets/`: it contains the images.
  - `components/`: it contains the components used in the app.
  - `pages/`: it contains the components that represent a page in the app (in our case, we have only one page).
  - `services/`: it contains the logic of the app, such as fetching and parsing available jobs that will be rendered.

Each component in the app has its own `index.jsx` and `style.css` files. Some components also have a `hook.js` file, which is intended to separate the component's HTML structure from its logic.
