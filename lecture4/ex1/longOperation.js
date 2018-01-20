const fs = require('fs');  // file system
var data;
process.on('message',(filename)=>{

 fs.createReadStream(__dirname+'/'+filename)
    .on('data',(chunk)=>{
        data+=chunk;

        console.log("--------------------------------------------------------------------------------");
        console.log(chunk);
        console.log("--------------------------------------------------------------------------------");
    })
    .on('end',()=>{
        process.send(data);
    });
    
});