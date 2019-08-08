'use strict'

var pako = require('pako/lib/inflate.js')
var decode64 = require('./decode64')

module.exports.decode = function (encoded) {
  var deflated = decode64(encoded)
  return pako.inflateRaw(deflated, { to: 'string' })
}
