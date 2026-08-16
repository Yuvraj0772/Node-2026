const http = require('http');
http.createServer((req, res) => {
    //res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("<h1>Hello, Yuvraj This Side !</h1>");
    res.end('Hello, World!');
}).listen(4800);