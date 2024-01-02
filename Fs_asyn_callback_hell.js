const path = require('path')
const {readFile, writeFile} = require('fs');
const { log } = require('console');

readFile(path.join(__dirname,'content','data.txt'),'utf8',(err, result)=>{
    if (err) log(err)
   let first = result
    readFile(path.join(__dirname,'content','subFolder','secData.txt'),'utf8',(err, result)=>{
        if (err) log(err)
        let second = result
    const per = {
        nam : 'Okoko Patrick',
        contry : 'Nigeria'
    };
        writeFile(
            path.join(__dirname,'content','data.txt'),
            `Hi my name is ${per.nam}, from ${per.contry} and`,
            (err, result)=>{
                if(err) log(err) 
            writeFile(
                path.join(__dirname,'content','subFolder','secData.txt'),
                'I want to be a tech expert',
                (err, result)=>{
                    if (err) log(err)
                        writeFile(path.join(__dirname,'Data_from_content.txt'),`${first} ${second}`,{flag :'a'},(err, result)=>{
                            if (err) log(err)
                            readFile(path.resolve(__dirname,'Data_from_content.txt',),'utf8',(err, result)=>{
                                if (err) log(err)
                                log(result)
                            })
                        })
            })
        })
    })
})