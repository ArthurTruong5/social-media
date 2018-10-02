# TechConnect ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

Foobar is a Python library for dealing with word pluralization.

## Installation



`$ npm install`

`$ npm run dev`

## Check if IsEmpty

```javascript
// If its undefined, null it will turn it into a empty string for validator to work.
const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);

module.exports = isEmpty;

```

## References & Notes

Private Routes - https://tylermcginnis.com/react-router-protected-routes-authentication/

Postman - https://www.getpostman.com/

Loading Spinner - https://loading.io/

Passport Jwt - https://www.npmjs.com/package/passport-jwt

Concurrently - https://github.com/kimmobrunfeldt/concurrently

Jwt-decode - https://github.com/auth0/jwt-decode

Redux Dev Tools - https://github.com/zalmoxisus/redux-devtools-extension

Redux Thunk - https://github.com/reduxjs/redux-thunk

Redux - https://github.com/reduxjs/redux

React-Redux - https://github.com/reduxjs/react-redux

React-router - https://github.com/ReactTraining/react-router

create-react-app - https://github.com/facebook/create-react-app

Validator - https://github.com/chriso/validator.js

Session - https://github.com/expressjs/session

NodeJSONwebToken - https://github.com/auth0/node-jsonwebtoken

Gravatar - https://github.com/emerleite/node-gravatar

Body-parser - https://github.com/expressjs/body-parser

Jest - https://github.com/ArthurTruong5/jest-unit-testing

## Bugs

Error with componentWillReceiveProps() as its been depreciated - https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops

## License
[MIT](https://choosealicense.com/licenses/mit/)
