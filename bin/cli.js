#!/usr/bin/env node
'use strict';

const fs = require('fs');
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

const files = argv._.filter(file => {
  try {
    fs.accessSync(file, fs.R_OK);
    return true;
  } catch (e) {
    console.warn('File is not accessible:', file);
    return false;
  }
});

process.stdout.write(writeConstants.constantList(files, argv.module));
