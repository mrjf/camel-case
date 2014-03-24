/* global describe, it */
var assert    = require('assert');
var camelCase = require('./');

describe('camel case', function () {
  it('should lower case a single word', function () {
    assert.equal(camelCase('test'), 'test');
    assert.equal(camelCase('TEST'), 'test');
  });

  it('should camel case regular sentence cased strings', function () {
    assert.equal(camelCase('test string'), 'testString');
    assert.equal(camelCase('Test String'), 'testString');
  });

  it('should camel case non-alphanumeric separators', function () {
    assert.equal(camelCase('dot.case'), 'dotCase');
    assert.equal(camelCase('path/case'), 'pathCase');
  });

  it('should camel case pascal cased strings', function () {
    assert.equal(camelCase('TestString'), 'testString');
  });
});
