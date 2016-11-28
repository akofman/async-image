# async-image

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Just an asynchronous image loader without any dependency.

## example

```
import loadImage from 'async-image';
const img = await loadImage('path/to/my/image');
console.log('Yeah I can access the image width ', img.width);
```

## install

`npm i async-image`

## license

MIT

[build-badge]: https://img.shields.io/travis/akofman/async-image/master.png?style=flat-square
[build]: https://travis-ci.org/akofman/async-image

[npm-badge]: https://img.shields.io/npm/v/async-image.png?style=flat-square
[npm]: https://www.npmjs.org/package/async-image

[coveralls-badge]: https://img.shields.io/coveralls/akofman/async-image/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/akofman/async-image
