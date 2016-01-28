angular-write-constants
=======================

[![NPM Version](https://img.shields.io/npm/v/angular-write-constants.svg?style=flat)](https://npmjs.org/package/angular-write-constants)
[![NPM Downloads](https://img.shields.io/npm/dm/angular-write-constants.svg?style=flat)](https://npmjs.org/package/angular-write-constants)
[![Build Status](https://travis-ci.org/tradity/angular-write-constants.png?style=flat)](https://travis-ci.org/tradity/angular-write-constants)
[![Coverage Status](https://coveralls.io/repos/tradity/angular-write-constants/badge.svg?branch=master)](https://coveralls.io/r/tradity/angular-write-constants?branch=master)
[![Dependency Status](https://david-dm.org/tradity/angular-write-constants.svg?style=flat)](https://david-dm.org/tradity/angular-write-constants)
[![devDependency Status](https://david-dm.org/tradity/angular-write-constants/dev-status.svg?style=flat)](https://david-dm.org/tradity/angular-write-constants#info=devDependencies)

Utility for creating a JS config for angular using constants,
using a list of input files.

Install via `npm install angular-write-constants`.

## CLI usage
```
angular-write-constants --module moduleName primary.json secondary.json ... > config.js
```

Example contents:

`primary.json`:
```js
{
  "answerToEverything": 42,
  "overriddenValue": "someOldValue"
}
```

`secondary.json`:
```js
{
  "overriddenValue": "someNewValue",
  "apiEndpoint": "https://google.com/"
}
```

Resulting `config.js`:
```js
angular.module("moduleName")
  .constant("ANSWER_TO_EVERYTHING", 42)
  .constant("OVERRIDDEN_VALUE", "someNewValue")
  .constant("API_ENDPOINT", "https://google.com/");
```

## License

MIT
