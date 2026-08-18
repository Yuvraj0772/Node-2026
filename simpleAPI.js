const http = require('http');

const userData = [
    {
        name : 'roy',
        age : 30,
        email : 'roy@test.com'
    },

    {
        name : 'sam',
        age : 22,
        email : 'sam@test.com'
    },

    {
        name : 'pet',
        age : 33,
        email : 'pet@test.com'
    }
]

http.createServer((req,resp) =>{
    resp.setHeader("Content-Type",'application-JSON');
    resp.write(JSON.stringify(userData));

    resp.end();
}).listen(5800);