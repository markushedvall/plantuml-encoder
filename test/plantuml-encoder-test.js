/* global describe it */
const chai = require('chai')
const plantumlEncoder = require('../index')
const browserEncoder = require('../dist/plantuml-encoder')
const minifiedEncoder = require('../dist/plantuml-encoder.min')
const browserDecoder = require('../dist/plantuml-decoder')
const minifiedDecoder = require('../dist/plantuml-decoder.min')

const expect = chai.expect

const uml = 'A -> B: Hello/你好'
const encoded = 'SrJGjLDmibBmICt9oTT_idV1qwLx0G00'

describe('plantuml-encoder', function () {
  describe('#encode()', function () {
    it('node.js should encode UTF-8', function () {
      const encoded = plantumlEncoder.encode(uml)
      expect(encoded).to.equal(encoded)
    })
    it('browser should encode UTF-8', function () {
      expect(browserEncoder.encode(uml)).to.equal(plantumlEncoder.encode(uml))
    })
    it('browser (minified) should encode UTF-8', function () {
      expect(minifiedEncoder.encode(uml)).to.equal(plantumlEncoder.encode(uml))
    })
  })

  describe('#decode()', function () {
    it('node.js should decode UTF-8', function () {
      const decoded = plantumlEncoder.decode(encoded)
      expect(decoded).to.equal(uml)
    })
    it('browser should decode UTF-8', function () {
      expect(browserDecoder.decode(encoded)).to.equal(plantumlEncoder.decode(encoded))
    })
    it('browser (minified) should decode UTF-8', function () {
      expect(minifiedDecoder.decode(encoded)).to.equal(plantumlEncoder.decode(encoded))
    })
  })
})
