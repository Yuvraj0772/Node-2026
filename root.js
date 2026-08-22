const http = require('http');

http.createServer((req,resp) =>{
    resp.writeHead(200,{"Content-type":'text/html'});
    resp.end('Hello');
}).listen(4300);