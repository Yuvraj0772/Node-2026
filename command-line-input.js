// to take input from command line we use process.argv
const arg = process.argv;

//console.log("Yuvraj");

// Dyanmic Port

const port = arg[2];

const http = require('http');

http.createServer((req,resp) =>{
    resp.write("<h1>Welcome to Node.js</h1>");
    resp.end();
}).listen(port);


console.log("-----",arg);