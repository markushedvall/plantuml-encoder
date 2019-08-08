'use strict'

var utf8bytes = require('utf8-bytes')
var pakoDeflate = require('pako/lib/deflate.js')
var pakoInflate = require('pako/lib/inflate.js')
var encode64 = require('./encode64')
var decode64 = require('./decode64')

module.exports.encode = function (text) {
  var data = utf8bytes(text)
  var deflated = pakoDeflate.deflateRaw(data, { level: 9, to: 'string' })
  return encode64.encode(deflated)
}

module.exports.decode = function (encoded) {
  var deflated = decode64.decode(encoded)
  return pakoInflate.inflateRaw(deflated, { to: 'string' })
}
