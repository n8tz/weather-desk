<h1 align="center">weather-desk</h1>
<p align="center">Simple weather widgets desk</p>

## How to start

### using docker-compose

```
docker-compose up
```

& start localhost:8080

### using local setup

#### setup
```
npm i
```

#### dev
```
npm run start-dev
npm run runBrowser
```

#### prod
```
npm run build
npm run start
```

## How to use

Edit & add widgets from the setting page & save to persist.

### What can be improved

- Code quality / comments
- add some weather infos wikidata / news in the widgets
- add some user management
- add some test
- add some anims & scrap picts directly from flikr
- SSR fetching, etc...

## Code structure

This app inherit a redux structure/boilerplate from [wpi-react-redux-sass-ssr](https://github.com/n8tz/wpi-react-redux-sass-ssr)<br/>
which inherit itself SSR & webpack from [wpi-react-hmr-ssr](https://github.com/n8tz/wpi-react-hmr-ssr)

See [webpack-inherit](https://github.com/n8tz/webpack-inherit)

- ./App/App.js is the React root component.
- ./App/index.js hold the renders fn
- ./App/api/*.js are server side only

