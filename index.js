'use strict';

const fs = require('fs');

function macroStyleKey(key) {
  return key.replace(/[^A-Z][A-Z]/g, m => m[0] + '_' + m[1]).toUpperCase();
}

exports.constantList = function(files, moduleName) {
  const j = {};
  
  files.forEach(file => {
    const origJSON = JSON.parse(fs.readFileSync(file));
    const macroStyleKeysJSON = {};
    
    Object.keys(origJSON).forEach(k => {
      macroStyleKeysJSON[macroStyleKey(k)] = origJSON[k];
    });
    
    Object.assign(j, macroStyleKeysJSON);
  });
  
  let s = 'angular.module("' + moduleName + '")\n' +
  Object.keys(j).map(key => (
    '  .constant("' + key + '", ' + JSON.stringify(j[key]) + ')'
  )).join('\n') + ';\n';
  
  return s;
};
