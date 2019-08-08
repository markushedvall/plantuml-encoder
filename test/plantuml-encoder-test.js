/* global describe it */
var chai = require('chai')
var nodeEncoder = require('../lib/plantuml-encoder')
var browserEncoder = require('../dist/plantuml-encoder')
var minifiedEncoder = require('../dist/plantuml-encoder.min')

var expect = chai.expect

describe('plantuml-encoder', function () {
  describe('node.js', function () {
    it('should encode UTF-8 "A -> B: Hello/你好"', function () {
      var encoded = nodeEncoder.encode('A -> B: Hello/你好')
      expect(encoded).to.equal('SrJGjLDmibBmICt9oTT_idV1qwLx0G00')
    })
  })

  describe('browser', function () {
    it('should encode UTF-8 "A -> B: Hello/你好"', function () {
      var encoded = browserEncoder.encode('A -> B: Hello/你好')
      expect(encoded).to.equal('SrJGjLDmibBmICt9oTT_idV1qwLx0G00')
    })
  })

  describe('browser with minified code', function () {
    it('should encode UTF-8 "A -> B: Hello/你好"', function () {
      var encoded = minifiedEncoder.encode('A -> B: Hello/你好')
      expect(encoded).to.equal('SrJGjLDmibBmICt9oTT_idV1qwLx0G00')
    })
  })
  describe('#decode()', function () {
    it('should decode "A -> B: Hello"', function () {
      var plain = 'A -> B: Hello'
      var crypt = 'SrJGjLDmibBmICt9oGS0'
      var decoded = nodeEncoder.decode(crypt)
      expect(decoded).to.equal(plain)
    })
    it('should decode UTF-8 "A -> B: Hello/你好"', function () {
      var decoded = nodeEncoder.decode('SrJGjLDmibBmICt9oTT_idV1qwLx0G00')
      expect(decoded).to.equal('A -> B: Hello/你好')
    })
  })
})
