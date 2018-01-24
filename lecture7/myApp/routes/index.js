var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var mongo=require('mongoskin');
var router = express.Router();

// Nodejs encryption
const crypto = require('crypto'),
    algorithm = 'aes256',
    password = 'asaadsaad';


    function encrypt(txt){
      let cipher = crypto.createCipher(algorithm, password)
      let crypted = cipher.update(txt,'utf8','hex')
      crypted += cipher.final('hex');
      return crypted;
    }


    function decrypt(txt){
      let decipher = crypto.createDecipher(algorithm,password)
      let dec = decipher.update(txt,'hex','utf8')
      dec += decipher.final('utf8');
      return dec;
    }
    

/* GET home page. */
router.get('/', function(req, res, next) {

  var db= mongo.db("mongodb://localhost:27017/assignment7",{native_parser:true});
  db.bind('homework7');
  db.homework7.findOne({},(err,item)=>{
    db.close();
	  res.end(decrypt(item.message));
  });
});

module.exports = router;
