'use strict';

var zlib = require('zlib');
var encode64 = require('./encode64');

// 1. Encode in UTF-8
// 2. Compress using Deflate algorithm
// 3. Reencode using a transformation close to base64

module.exports.encodeSync = function(text) {
  var utf8 = text.toString('utf8');
  var buf = zlib.deflateSync(utf8, {level: 9});
  return encode64.encode(buf.toString('binary'));
};
