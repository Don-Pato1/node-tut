const { log } = require('console');
const http = require('http');

const myServer = http.createServer((req, res)=>{
    req.url === '/'? res.end('<h1>Welcome to Our home Page</h1>'): req.url === '/about'? res.end('<h1>Our vision is to give Nigeria a good name and trading platform</h1>'): res.end('<h1>Oops</h1><br><h3>We can"t seem to find the page</h3><a href="/">Home</a>');
    
    log('first launch')
})

myServer.listen(1111)