# aspen

> Yet another Node.js boilerplate

[![Build Status](https://semaphoreci.com/api/v1/sirodoht/aspen/branches/master/badge.svg)](https://semaphoreci.com/sirodoht/aspen)

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

Server runs at `http://localhost:3000/`

## npm scripts

* `npm start` Start Node server and watch JS and Sass files.
* `npm test` Run jshint and tests.
* `npm run browserify` Run browserify on the front app.
* `npm run watchify` Run browserify and watch for changes.
* `npm run sass` Build Sass styles.
* `npm run sasswatch` Build Sass styles and watch for changes.
* `npm run build` Build front JS app and Sass styles.
* `npm run deploy` Build front JS app and Sass styles.

## Todo

- [ ] Move middleware out of `back/app.js`
- [ ] Handle failed login properly
- [ ] Validation
- [ ] Security
- [ ] Error handling

## License

MIT
