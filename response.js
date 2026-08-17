const http = require('http');

const server = http.createServer((req,resp) =>{
    resp.setHeader("Content-Type","text/html");
    resp.write("<h1> creating response </h1>");
    resp.end();
}).listen(3500);

// to exist a request 

resp.end();
// or process.exit();