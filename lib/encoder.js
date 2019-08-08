'use strict'

var utf8bytes = require('utf8-bytes')
var pako = require('pako/lib/deflate.js')
var encode64 = require('./encode64')

module.exports.encode = function (text) {
  var data = utf8bytes(text)
  var deflated = pako.deflateRaw(data, { level: 9, to: 'string' })
  return encode64(deflated)
}
