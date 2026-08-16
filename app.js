//console.log("Hello, World!");

// file system module
var fs = require('fs');
fs.writeFile('name.txt', 'Hello, Yuvraj!',function(err){
    if(err) throw err;
    console.log('Saved!');
});