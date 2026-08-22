const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req,resp) =>{
    fs.readFile('html/web.html','utf-8',(err,data)=>{
        if(err){
            resp.writeHead(500,{"Content-type":'text/plain'});
            resp.write("Internal Server Error");
            resp.end();
            return;
        }
        resp.writeHead(200,{"Content-type":'text/html'});

        if(req.url == '/'){
            resp.write(data);
        }
        else if(req.url == '/submit'){
            let dataBody =[];
            req.on('data',(chunk)=>{
                dataBody.push(chunk);
            });
            req.on('end',()=>{
                const rawData = Buffer.concat(dataBody).toString();
                let readableData = querystring.parse(rawData);
                let dataString = `Name: ${readableData.name}, Email: ${readableData.email}`;
                console.log(dataString);
                
                // Append the data to a file - Synchronous write operations
                fs.writeFileSync("text/" + readableData.name + ".txt", dataString);
                // file sync block process for one time,whenever you create file
                console.log("Data written to file successfully.");
            });
            resp.write('<h1>Form Submitted</h1>');
        }
        resp.end();
    })
}).listen(4200);

// http.createServer((req,resp) =>{
//     resp.writeHead(200,{"Content-type":'text/html'});
//     console.log(req.url);
//     if(req.url == '/'){
//         resp.write(`<form action="/submit" method="post"> 
//         <input type="text" placeholder="enter name" name="name">
//         <input type="text" placeholder="enter email" name="email">
//         <button type="submit">Submit</button>
//         </form>`);
//     }
//     else if(req.url == '/submit'){
//         resp.write('<h1>Form Submitted</h1>');
//     }  
//     resp.end();
// }).listen(4200);