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

Run unit tests:

```sh
yarn test
```

For building a production version use:

```sh
yarn build
```

> Python server backend should be running on port: 127.0.0.1:5000. 
> A server with a fixed bug can be downloaded from [contacts-app-server-0.2.7](https://github.com/rlengvenis/contacts-app-server-0.2.7)
> Else for filtering to work properly fix runserver.py line:45 by adding `if contact[k] is not None and v in contact[k]`. 

## Design notes

Information on design decisions [Thoughts.md](https://github.com/rlengvenis/contacts-app/blob/master/THOUGHTS.md)

## Features
| Feature | References |
|:---|:---|
| Redux state management | [https://github.com/reactjs/react-redux](https://github.com/reactjs/react-redux)
| Redux-form and validation | [github.com/erikras/redux-form](https://github.com/erikras/redux-form) |
| Router v4 | [github.com/ReactTraining/react-router](https://github.com/ReactTraining/react-router)|
| BEM and SCSS | [getbem.com](http://getbem.com/) |
| Async/await presets | [MDN Async Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) |
| Mobile version navigation ||
| Unit test examples ||
