# Contacts App

Configuration based on [create-react-app](https://github.com/facebook/create-react-app)


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

> Note: Python server backend should be running on port: 127.0.0.1:5000. For filtering to work properly
fix runserver.py line:45 by adding `if contact[k] is not None and v in contact[k]`. A server with a fixed bug can be downloaded from [there](https://github.com/rlengvenis/contacts-app-server-0.2.7)

## Notes

### Folder structure ###

* `actions` - actions and their tests
* `components` - organized by page and tests
* `config` - cofiguration files
* `reducers` - reducers and their tests
* `styles` - generic css styles
        
More reasoning on folder structure: [The 100% correct way to structure a React app (or why there’s no such thing)](https://hackernoon.com/the-100-correct-way-to-structure-a-react-app-or-why-theres-no-such-thing-3ede534ef1ed) 


### Unit tests ###

`src/setupTests.js` holds project test env configuration. Technologies used:

* [enzyme](https://github.com/airbnb/enzyme) - a wrapper for React test utils
* [chai](https://github.com/chaijs/chai) - assertion library
* [mocha](https://github.com/mochajs/mocha) - a test framework
* [jsdom](https://github.com/tmpvar/jsdom) - a javascript DOM implementation 


## Features
| Feature | References |
|:---|:---|
| Redux state management | [https://github.com/reactjs/react-redux](https://github.com/reactjs/react-redux)
| Redux-form and validation | [github.com/erikras/redux-form](https://github.com/erikras/redux-form) |
| Router v4 | [github.com/ReactTraining/react-router](https://github.com/ReactTraining/react-router)|
| BEM and SCSS | [getbem.com](http://getbem.com/) |
| Async/await presets | [MDN Async Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) |
| Mobile version navigation ||
| Unit tests examples ||
