# TechConnect ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

Foobar is a Python library for dealing with word pluralization.

## Installation



`$ npm install`

`$ npm run dev`

## What is JWT

What JWT is exactly?
It is a token that only the server can generate, and can contain a payload of data.

What's the point of it?
A JWT payload can contain things like user ID so that when the client sends you a JWT, you can be sure that it is issued by you, and you can see to whom it was issued.

Where can it be useful?
Usually, in RESTful APIs, where the server must not use any sort of sessions.

How does it differ from using sessions?
In a typical session flow, the browser sends a cookie containing a token, which is then matched at the server to some data which the server makes use of to authenticate the user.

In a JWT flow, the token itself contains the data. The server decrypts the token to authenticate the user only. No data stored on the server.

What is a typical authentication flow using JWT?
User credentials sent to /signin
/signin returns a JWT
JWT is stored in localStorage
JWT is sent on every request (to API?)
The server decrypts JWT and extracts user ID out of it
The server sends response given the authenticated user.

JWT is just a popular JSON based format of a security token.

JWT tokens are not invented to replace session cookies. They are mostly used to secure web APIs (request data). Session cookies on the other hand are used in web applications, where you log in a user and automatically send the cookies with each request (request pages).

JWT tokens are included in the Authorization HTTP header as part of the bearer authentication scheme. The main advantages of using bearer scheme authentication is that it's not vulnerable to CSRF attacks because your script needs to explicitly attach the token to the request and can be used cross-domain (unlike cookies).

Bearer scheme authentication does require HTTPS connections as anyone who manages to steal the token can use it to access the API for as long as the token is valid.

Security protocols like OAuth2 use JWT tokens to secure APIs. OpenID Connect uses JWT tokens to authenticate web applications, but stores the token in a cookie.

Since JWT tokens are digitally signed by the issuer (server doing the authentication), they can be validated without talking to the server again.

Digital signatures allow you to sign a piece of data (JWT token in this case) with a private key and the server receiving the token only needs the public key to verify that none of the data was changed. So the API server only needs the public key (which is not secret) from an authorization server to trust tokens it issues. The client of the API brings the token and the API server can verify it without talking to the authorization server.

## References & Notes

Private Routes - https://tylermcginnis.com/react-router-protected-routes-authentication/

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


## License
[MIT](https://choosealicense.com/licenses/mit/)
