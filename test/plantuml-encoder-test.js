/* global describe it */
var chai = require('chai')
var plantumlEncoder = require('../lib/plantuml-encoder')

var expect = chai.expect

describe('plantuml-encoder', function () {
  describe('#encode()', function () {
    it('should encode "A -> B: Hello"', function () {
      var encoded = plantumlEncoder.encode('A -> B: Hello')
      expect(encoded).to.equal('UDfpLD2rKt2oKl18pSd91m0KGWDz')
    })
    it('should encode UTF-8 "A -> B: Hello/你好"', function () {
      var encoded = plantumlEncoder.encode('A -> B: Hello/你好')
      expect(encoded).to.equal('UDfpLD2rKt2oKl18pSd9rt-oTy7JfNi1FZK8D000')
    })
  })
  describe('#decode()', function () {
    it('should decode "A -> B: Hello"', function () {
      var plain = 'A -> B: Hello'
      var crypt = 'UDfpLD2rKt2oKl18pSd91m0KGWDz'
      var decoded = plantumlEncoder.decode(crypt)
      expect(decoded).to.equal(plain)
    })
    it('should decode UTF-8 "A -> B: Hello/你好"', function () {
      var decoded = plantumlEncoder.decode('UDfpLD2rKt2oKl18pSd9rt-oTy7JfNi1FZK8D000')
      expect(decoded).to.equal('A -> B: Hello/你好')
    })
  })
})
