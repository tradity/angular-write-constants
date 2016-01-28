'use strict';

const fs = require('fs');

exports.constantList = function(files, moduleName) {
  const j = {};
  
  files.forEach(file => {
    Object.assign(j, JSON.parse(fs.readFileSync(file)));
  });
  
  let s = 'angular.module("' + moduleName + '")\n' +
  Object.keys(j).map(key => {
    const macroStyleKey = key.replace(/[^A-Z][A-Z]/g, m => m[0] + '_' + m[1]).toUpperCase();
    
    return '  .constant("' + macroStyleKey + '", ' + JSON.stringify(j[key]) + ')';
  }).join('\n') + ';\n';
  
  return s;
};
