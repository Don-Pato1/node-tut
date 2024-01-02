const path = require('path')
const {readFileSync, writeFileSync} = require('fs');
const { log } = require('console');

let fir = readFileSync(path.join(__dirname,'content','subfolder','secData.txt'),'utf-8')
let sec = readFileSync(path.join(__dirname,'content','data.txt'),'utf-8')

writeFileSync(path.join(__dirname,'content','subFolder','secData.txt'), 'My new name is Donny')
writeFileSync(path.join(__dirname,'Data_from_content.txt'), `\nThe Datas are :\n${fir}\n${sec} \n\n\n`,{flag : 'a'})

log(readFileSync(path.join(__dirname,'Data_from_content.txt'),'utf8'))
