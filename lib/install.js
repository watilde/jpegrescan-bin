var path = require('path');
var log = require('logalot');
var bin = require('./');
var jpg = path.join(__dirname, '../test/test.jpg');

bin.run([jpg, jpg], function (err) {
	if (err) {
		log.error(err.message);
		log.error('jpegrescan binary test failed');
		return;
	}

	log.success('jpegrescan binary test passed successfully');
});
