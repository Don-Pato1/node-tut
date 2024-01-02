const { log } = require('console');
const path = require('path')


console.log(__dirname);

let toMainPath = path.resolve(__dirname,'..','..','test.js')

log(toMainPath)

log(path.basename(toMainPath))