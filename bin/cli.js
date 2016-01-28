#!/usr/bin/env node
'use strict';

const minimist = require('minimist');
  const writeConstants = require('../');

const argv = minimist(process.argv.slice(2));

if (argv.help || argv.h || !argv.module || argv._.length < 1) {
console.info([
'Usage:',
'angular-write-constants --module moduleName primary.json secondary.json ... > config.js'
].join('\n'));

process.exit(0);
}

process.stdout.write(writeConstants.constantList(argv._, argv.module));
