const fsSyncn = require('fs');
const path = require('path')
const firstRead = fsSyncn.readFileSync(path.join(__dirname, 'contents', 'data.txt'),'utf8', (err, result)=>{
    if(err) console.log(err)
    console.log(result)
})
console.log(firstRead)