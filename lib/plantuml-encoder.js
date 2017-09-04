'use strict'

var utf8bytes = require('utf8-bytes')
var pakoDeflate = require('pako/lib/deflate.js')
var pakoInflate = require('pako/lib/inflate.js')
var encode64 = require('./encode64')
var decode64 = require('./decode64')
var Utf8ArrayToStr = require('./utf8arraytostring')

// 1. decode using a transformation close to base64
// 2. decompress using Deflate algorithm
// 3. Encode in UTF-8
//
module.exports.decode = function (text) {
  var t = decode64.decode(text)
  var inflated = pakoInflate.inflate(t)
  return Utf8ArrayToStr(inflated)
}

// 1. Encode in UTF-8
// 2. Compress using Deflate algorithm
// 3. Reencode using a transformation close to base64

module.exports.encode = function (text) {
  var data = utf8bytes(text)
  var deflated = pakoDeflate.deflate(data, { level: 9, to: 'string' })
  return encode64.encode(deflated)
}
