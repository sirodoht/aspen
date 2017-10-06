# aspen

> Yet another Node.js boilerplate based on Koa.js

[![Build Status](https://travis-ci.org/sirodoht/aspen.svg?branch=master)](https://travis-ci.org/sirodoht/aspen)


## Stack

* Koa web framework
* Passport authentication
* Sequelize ORM using PostgreSQL
* Pug view engine
* Jest testing framework


## Setup

Create a db, user and password all `aspen`. See [here](https://gist.github.com/sirodoht/0666e232e1baf76f76bac43eb2600e2b)
for a cheatsheet and [here](https://github.com/sirodoht/aspen/blob/master/config/default.yml#L5)
for the local Postgres credentials.

Then:
```sh
$ npm install
$ npm start  # or
$ npm run watch  # reloads on save
```

Server runs on localhost port 3000 [by default](https://github.com/sirodoht/aspen/blob/master/config/default.yml#L1)


## License

MIT
