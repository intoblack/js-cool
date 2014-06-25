var http = require('http')
http.createServer(function  (req , res) {
    res.writeHead(200 , {'content-Type' : 'text/plain'});
    res.end('hello world\n');
}).listen(80 , '127.0.0.1');


// console.log('server runing .......')