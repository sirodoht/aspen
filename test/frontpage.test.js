/**
 * @file Frontpage tests
 */

const config = require('config');

const app = require('../back/app');
const models = require('../back/models/index');


test('Frontpage 200', (done) => {
  const request = require('supertest').agent(app.listen(3000));
  return request
    .get('/')
    .expect(200)
    .end(done);
});
