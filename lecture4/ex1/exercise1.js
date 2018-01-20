
const{fork}=require('child_process');
const url = require('url');
const path = require('path');
const Rx=require('rx');

const subject_= new Rx.Subject();

function fileReader(e){
    const filename= path.basename(e.req.url);
    const childProcess=fork('longOperation.js');
    childProcess.send(filename);

    childProcess.on('message',str=>{
        e.res.writeHead(200, { 'Content-Type': 'text/plain' });
        e.res.end(`String is ${str}`);
    });

}

subject_.subscribe(fileReader);


const http= require('http');
http.createServer((req,res)=>{
    subject_.onNext({req:req, res:res});
}).listen(3000);