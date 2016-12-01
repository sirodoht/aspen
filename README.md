# aspen

> Yet another Node.js boilerplate

[![Build Status](https://travis-ci.org/sirodoht/aspen.svg?branch=master)](https://travis-ci.org/sirodoht/aspen)

## Stack

* Express
* Sequelize using PostgreSQL
* Pug
* Ava
* Chai
* Passport
* yarn

## Run

Start PostgreSQL. Then:

```sh
$ createdb aspen  # postgres tool for db creation via shell
$ npm install
$ npm start
```

Also tested with [`yarn`](https://yarnpkg.com/).

Server runs at `http://localhost:3000/`

## npm scripts

* `npm start` Start Node server.
* `npm test` Run linting and tests.

## Todo

- [ ] Move middleware out of `back/app.js`
- [ ] Handle failed login properly
- [ ] Validation
- [ ] Security
- [ ] Error handling

## License

MIT
