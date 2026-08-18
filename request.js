const http = require('http');

http.createServer((req,resp) =>{
    
    resp.write("<h1>Welcome to Node.js</h1>");
    resp.end();

    // it will print on vs code terminal not on browser
    console.log(req.url);
}).listen(5300);

//console.log(req);