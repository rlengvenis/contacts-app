# Create React App Redux

An opinionated initial React Redux configuration based on [create-react-app](https://github.com/facebook/create-react-app)


## Scripts

Install dependencies using yarn or npm manager:

```sh
yarn install
```

Start development version:

```sh
yarn start
```

For building a production version use:

```sh
yarn build
```

## Design notes

### Folder structure ###

Due to a specific domain, reducers and actions are reused on different pages, therefore they are put to `src/reducers` and `src/actions` folder appropriately. In general domain/feature/page oriented component file structure is used:

* `actions` - actions and their tests
* `components` - organized by page and tests
* `config` - cofiguration files
* `reducers` - reducers and their tests
* `selectors` - selectors used to select domain objects from normalized data
* `styles` - css styles written using BEM and SCSS
        
More reasoning on folder structure: [The 100% correct way to structure a React app (or why there’s no such thing)](https://hackernoon.com/the-100-correct-way-to-structure-a-react-app-or-why-theres-no-such-thing-3ede534ef1ed) 


### CSS design ###

BEM methodology was used for writting CSS styles. CSS styles are located under `src/styles` folder. General structure is:

* `core` - css variables and reset
* `layouts` - reusable container layouts
* `modules` - reusable modules
* `pages` - page dependant styling

Plain BEM was used due to the fact that BEM methodology itself solves global namespacing and other issues. Styled-components is an option I will consider using in future app versions. 

More reasoning about CSS usage: [Stop using CSS in JavaScript for web development](https://medium.com/@gajus/stop-using-css-in-javascript-for-web-development-fa32fb873dcc)


### Unit tests ###

`src/setupTests.js` holds project test env configuration. Technologies used:

* [enzyme](https://github.com/airbnb/enzyme) - a wrapper for React test utils
* [chai](https://github.com/chaijs/chai) - assertion library
* [mocha](https://github.com/mochajs/mocha) - a test framework
* [jsdom](https://github.com/tmpvar/jsdom) - a javascript DOM implementation 

>Note: I have used `Mocha` instead of create-react-app native `Jest` due to `Jest` issues while using `jsdom` and rendering canvas related elements to DOM.

## Features
| Feature | References |
|:---|:---|
| Redux configuration| [https://github.com/reactjs/react-redux](https://github.com/reactjs/react-redux)
| Redux-form and validation | [github.com/erikras/redux-form](https://github.com/erikras/redux-form) |
| Redux selectors | [Computing Derived Data](https://redux.js.org/docs/recipes/ComputingDerivedData.html) |
| Router v4 | [github.com/ReactTraining/react-router](https://github.com/ReactTraining/react-router)|
| BEM and SCSS | [getbem.com](http://getbem.com/) |
| JWT authentification| [jwt.io](https://jwt.io/)  |
| Async/await presets | [MDN Async Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) |
| Mobile version navigation ||
| Unit tests examples ||
