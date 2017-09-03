'use strict'

var utf8bytes = require('utf8-bytes')
var pakoDeflate = require('pako/lib/deflate.js')
var pakoInflate = require('pako/lib/inflate.js')
var encode64 = require('./encode64')

// http://www.onicos.com/staff/iz/amuse/javascript/expert/utf.txt

/* utf.js - UTF-8 <=> UTF-16 convertion
 *
 * Copyright (C) 1999 Masanao Izumo <iz@onicos.co.jp>
 * Version: 1.0
 * LastModified: Dec 25 1999
 * This library is free.  You can redistribute it and/or modify it.
 */

function Utf8ArrayToStr (array) {
  var out, i, len, c
  var char2, char3

  out = ''
  len = array.length
  i = 0
  while (i < len) {
    c = array[i++]
    switch (c >> 4) {
    case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
      // 0xxxxxxx
      out += String.fromCharCode(c)
      break
    case 12: case 13:
      // 110x xxxx   10xx xxxx
      char2 = array[i++]
      out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F))
      break
    case 14:
      // 1110 xxxx  10xx xxxx  10xx xxxx
      char2 = array[i++]
      char3 = array[i++]
      out += String.fromCharCode(((c & 0x0F) << 12) |
                     ((char2 & 0x3F) << 6) |
                     ((char3 & 0x3F) << 0))
        break
    }
  }

  return out
}

// 3. decode using a transformation close to base64
// 2. decompress using Deflate algorithm
// 1. Encode in UTF-8
//
module.exports.decode = function (text) {
  var t = encode64.decode(text)
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
