const express= require('express')
const app=express();

app.get("/hello",function(req,res){
    res.send("hello i am shreeram");
}).listen(3333);