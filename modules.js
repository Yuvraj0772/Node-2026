// Modules in Node.js are used to separate the code into smaller parts. Each module has its own context, so it cannot interfere with other modules or pollute the global scope.

const fs = require('fs');
const os = require('os');

fs.writeFile('dummy.txt', 'trying with Modules', function(err) {
    if (err) throw err;
    console.log('Saved!');
});

consoloe.log('Free Memory: ' + os.freemem());
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.hostname());