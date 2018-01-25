var express = require('express');
var router = express.Router();
var mongo=require('mongoskin');

/* read the collection */
router.get('/read', function(req, res, next) {

  var db= mongo.db("mongodb://localhost:27017/lecture8",{native_parser:true});
  db.bind('location');

  db.location.find({}).toArray((err,item)=>{
    db.close();

    if(err){
      res.status(400).json(err);
    }
  
    res.json(item)
  })

});

/*insert a document in the collection */


router.post('/insert/:name/:category/:long/:lat', function(req, res, next) {
  const obj={
      name:req.params.name,
      category:req.params.category,
      location:[req.params.long,req.params.lat]
  }

  var db= mongo.db("mongodb://localhost:27017/lecture8",{native_parser:true});
  db.bind('location');

  db.location.insert(obj,(err,item)=>{
    db.close();
    console.dir(`success:${JSON.stringify(item)}`);
    res.send(item)
  })

});


/* removing a document*/ 
router.post('/remove/:name/', function(req, res, next) {
  
  const query= {'name':req.params.name}
  var db= mongo.db("mongodb://localhost:27017/lecture8",{native_parser:true});
  db.bind('location');

  db.location.remove(query,(err,removed)=>{
    db.close();
    console.dir(removed + ' document removed');
    res.send(removed)
  })

});



/* updating a document*/ 
router.post('/update/:oldName/:newName', function(req, res, next) {
  
  const oldQuery= {'name':req.params.oldName}
  const newQuery= {$set:{'name':req.params.newName}}

  var db= mongo.db("mongodb://localhost:27017/lecture8",{native_parser:true});
  db.bind('location');

  db.location.updateOne(oldQuery,newQuery,(err,updated)=>{
    db.close();
    console.dir(updated + ' document updated');
    res.send(updated)
  })

});





router.get('/findNearestLocation/:category',(req,res)=>{
  const currentLong=41.017809;
  const currentLat=-91.967294;

  const query={
    $and:[
      {'location':{'$near':[currentLong,currentLat]}},
      {'category':req.params.category}
  ]
  };


  var db= mongo.db("mongodb://localhost:27017/lecture8",{native_parser:true});
  
  db.bind('location');
  db.location.find(query).limit(5).toArray((err,item)=>{
  
    db.close();
    res.json(item);
  });
});

module.exports = router;
