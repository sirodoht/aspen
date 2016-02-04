# aspen

> Yet another Node.js boilerplate

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

```sh
$ createdb aspen  # postgres tool for db creation via shell
$ npm install
$ npm start
```

## npm scripts

* `npm start`: Start Node server and watch JS and Sass files.
* `npm test`: Run jshint and tests.
* `npm run browserify`: Run browserify on the front app.
* `npm run watchify`: Run browserify and watch for changes.
* `npm run sass`: Build Sass styles.
* `npm run sasswatch`: Build Sass styles and watch for changes.
* `npm run build`: Build front JS app and Sass styles.
* `npm run deploy`: Build front JS app and Sass styles.

## Todo

- [ ] Testing
  - [ ] Evaluate `tape` and `node-tap`
- [ ] Move middleware out of `back/app.js`
- [ ] Handle failed login properly
- [ ] Validation
- [ ] Security
- [ ] Error handling

## License

MIT
