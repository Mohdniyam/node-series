const http = require('http');

http.createServer((req, res)=> {
    res.write('Welcome to this page!');
    res.end();
}).listen(3000);

function test (a,b){
    return a*b;
}

test(4,6); 