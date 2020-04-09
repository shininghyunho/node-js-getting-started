# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

# 현호생각

## 웹 구성
- 코드, db, 실시간 서버

## 코드
- index.js가 시발점.
- routes 디렉토리 안에 기능별로 route를 만들어 routing을 해줘서 사용.
- routing을 할때는 get post put delete를 사용.
- model 디렉토리 안에는 db나 스키마같은 설정을 담아줌.
- index.js에서 model를 통해 환경설정하고 routes에 기능을 사용.
- views 디렉토리에는 ejs같은 프론트 구성. 클라이언트와 마주하는 부분.

## db
- db로 mongodb를 사용함 NoSQL.
- url를 통해 손쉽게 통신 가능.
- mongodb altas에서는 cluster -> db -> collection으로 구성됨.

## 실시간 서버
- heroku라는 서버를 사용.
- 서버에서 코드를 실행시켜 놓음.