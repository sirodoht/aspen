# aspen

> Yet another Node.js boilerplate

[![Build Status](https://travis-ci.org/sirodoht/aspen.svg?branch=master)](https://travis-ci.org/sirodoht/aspen)

## Stack

* Express
* Sequelize using PostgreSQL
* Sass
* Jade
* Mocha
* Chai
* Passport
* Browserify

## Run

Start PostgreSQL. Then:

```sh
$ createdb aspen  # postgres tool for db creation via shell
$ npm install
$ npm start
```

Also tested with `[yarn](https://yarnpkg.com/)`.

Server runs at `http://localhost:3000/`

## npm scripts

* `npm start` Start Node server and watch JS and Sass files.
* `npm test` Run jshint and tests.
* `npm run build` Build front JS app and Sass styles.

## Todo

- [ ] Move middleware out of `back/app.js`
- [ ] Handle failed login properly
- [ ] Validation
- [ ] Security
- [ ] Error handling

## License

MIT
