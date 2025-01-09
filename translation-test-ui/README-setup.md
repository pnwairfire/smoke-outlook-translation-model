# Express JS web services

## Examples to follow

### YouTube

- [Web Dev Simplified -- Learn Express JS](https://www.youtube.com/watch?v=SccSCuHhOw0)
- [Web Dev Simplified -- Middleware](https://www.youtube.com/watch?v=lY6icfhap2o)

### Other

- [Express Templating](https://dev.to/alexmercedcoder/express-templating-cheatsheet-pug-ejs-handlebars-mustache-liquid-50f1)

## Basic setup

```
mkdir my_project
cd my_project
npm  init -y
npm install dotenv
npm install express
npm install mustache-express
npm install openai
mkdir public                    # for .html, .css and other static files
mkdir routes                    # for express routes
mkdir views                     # for templates
```

## Running the UI

Inside the `translation-test-ui/` folder, target scripts that can be run with
`npm` are defined in `package.json`.

To start up the server, just type `npm run start` and the point your browser
to the port and path set up in `server.js`. At first this will be:

localhost:3000



