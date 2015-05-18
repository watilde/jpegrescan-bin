# jpegrescan-bin
> JPEGrescan is a perl script that uses jpeg tools to optimize jpeg compression by micro-managing some of the compression math based on research into some of the most common parameters.

## Install
```
$ npm install --save jpegrescan
```

## Usage
```
var execFile = require('child_process').execFile;
var jpegrescan = require('jpegrescan');

execFile(jpegrescan, ['input.jpg', 'output.jpg'], function (err) {
  console.log('Image compressed!');
});
```

## CLI
```
$ npm install --global jpegrescan
$ jpegrescan
```

## License
MIT
