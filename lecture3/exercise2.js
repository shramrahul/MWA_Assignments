const fs= require('fs');
const server1 = require('http').createServer();

server1.on("request",(req,res)=>{
    fs.readFile(__dirname+'/123.jpg',(err,data)=>{
            if(err) throw err;
            res.end(data);
    });
}).listen(2222);


//using streams
const server2= require('http').createServer();
server2.on("request",(req,res)=>{
    const src=fs.createReadStream(__dirname+'/123.jpg');
    src.pipe(res);
}).listen(1111);


