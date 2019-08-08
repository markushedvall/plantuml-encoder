'use strict'

var pako = require('pako/lib/deflate.js')
var encode64 = require('./encode64')

module.exports.encode = function (text) {
  var deflated = pako.deflateRaw(text, { level: 9, to: 'string' })
  return encode64(deflated)
}
