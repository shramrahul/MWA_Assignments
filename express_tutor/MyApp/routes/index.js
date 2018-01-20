    var express = require('express');
    var app = express.Router();
    var fetch = require('node-fetch');
    
    const url = 'http://jsonplaceholder.typicode.com/users/';
    
    /* GET home page. */
    app.get('/promise', function(req, res, next) {
    let type ='Using Promise';
      fetch(url)
      .then(data=>data.json())
          .then(data=> renderData(res,data,type))
            .catch(err => console.log(err));
    });



    const rx= require('@reactivex/rxjs');

    app.get('/reactive',(req,res)=>{
    const type= 'Using Reactive';
      rx.Observable.fromPromise(fetch(url))
          .flatMap(x=> x.json())
                .subscribe(data=> renderData(res,data,type)
                  );
    });


    app.get('/async',async function(req,res){
      try{
            const type='Using Async';
            let response= await fetch(url);
            let data= await response.json();
              renderData(res,data,type);
        }catch(err){
        alert(err);
      }
    });

    function renderData(res,data,type){
      res.render('index',{ 
            title:'User list',
            topic:type,
            users:data 
      });
    };


    module.exports = app;
