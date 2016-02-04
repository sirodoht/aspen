/**
 * @fileOverview Frontpage tests
 */
var chai = require('chai');
var expect = chai.expect;
var req = require('request');

describe('Frontpage', function() {
  before(function (done) {
    var app = require('../back/app');
    app.listen(3000);
    done();
  });

  it('should get a 200 on the home page', function(done) {
    req.get('http://localhost:3000/', function(err, res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
