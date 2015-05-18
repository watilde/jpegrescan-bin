#!/usr/bin/env node
'use strict';

var spawn = require('child_process').spawn;
var jpegrescan = require('./');
var input = process.argv.slice(2);

spawn(jpegrescan, input, {stdio: 'inherit'})
	.on('exit', process.exit);
