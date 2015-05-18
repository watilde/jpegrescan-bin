'use strict';

var path = require('path');
var BinWrapper = require('bin-wrapper');

var VERSION = '1.0.0';
var url = 'https://github.com/kud/jpegrescan/archive/' + VERSION + '.zip';

module.exports = new BinWrapper()
  .src(url, 'darwin')
  .src(url, 'linux')
  .src(url, 'win32')
	.dest(path.join(__dirname, '../vendor'))
	.use('jpegrescan');
