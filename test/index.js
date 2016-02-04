/**
 * @fileOverview Frontpage tests
 */
var chai = require('chai');
var expect = chai.expect;
var req = require('request');

describe('Frontpage', function() {
  it('should get a 200 on the home page', function(done) {
    req.get('http://localhost:3000/', function(err, res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
