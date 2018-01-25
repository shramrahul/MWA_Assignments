//1
db. restaurants.find().pretty();

//2
db.restaurants.find({},{
    restaurant_id:1,
    district:1,
    cuisine:1
}).pretty();

//3
db.restaurants.find({},{
    _id:0,
    restaurant_id:1,
    district:1,
    cuisine:1
}).pretty();

//4
db.restaurants.find({},{
    _id:0,
    name:1,
    district:1,
    cuisine:1,
    'address.zipcode':1
}).pretty();


//5
db.restaurants.find({
    district:{$eq:'Bronx'}
}).pretty();


//6
db.restaurants.find({
    district:{$eq:'bronx'}
}).limit(5)
    .pretty();

//7
db.restaurants.find({
    district:{$eq:'bronx'}
}).skip(5)
    .limit(5)
        .pretty();

//8
db.restaurants.find({
    'address.coords.0':{$lt:-95.754168}
}).pretty();

//9
db.restaurants.find({
    cuisine:{$ne:'American '},
    'grades.score':{$gt:70},
    'address.coord.0':{$lt:-65.754168}
}).pretty()


//10

db.restaurants.find({'name':/^Wil/},{
    restaurant_id:1,
    name:1,
    district:1,
    cuision:1,
    _id:0
}).pretty();


//11

db.restaurants.find({'name':/ces$/},{
    _id:0,
    restaurant_id:1,
    name:1,
    district:1,
    cuision:1
}).pretty();



//12
db.restaurants.find({'name':/Reg/},{
    _id:0,
    restaurant_id:1,
    name:1,
    district:1,
    cuision:1
}).pretty();


//13
db.restaurants.find({
    district:{$eq:'Bronx'},
    cusine:{$in:['American ','Chinese']}
}).pretty();

//14
db.restaurants.find({
    district:{$in:['Staten Island','Queens','Brooklyn']}
},{
    _id:0,
    resturant_id:1,
    name:1,
    district:1,
    cuisine:1
}).pretty();


//15
db.restaurants.find({
    district:{$nin:['Staten Island','Queens','Brooklyn']}
},{
    _id:0,
    resturant_id:1,
    name:1,
    district:1,
    cuisine:1
}).pretty();

//16

db.restaurants.find({
    $nor:[{score:{$gt:10}}]
},{
    _id:0,
    restaurant_id:1,
    name:1,
    district:1,
    cuisine:1
}).pretty();


//17
db.restaurants.find({
    'address.coord.1':{$lt:52,$gt:42}
},{
    _id:0,
    restaurant_id:1,
    name:1,
    'address.coord':1
}).pretty();

//18
db.restaurants.find()
        .sort({name:1})
            .pretty();

//19
db.restaurants.find()
        .sort({name:-1})
            .pretty();

//20
db.restaurants.find()
        .sort({name:1,district:-1})
            .pretty();

//21
db.restaurants.find({
    "address.street": {$exists : true }
}).pretty();


//22
db.restaurants.find({
    "address.coord": {$type : 1}
}).pretty();


//23
db.restaurants.find({
    name: { $regex: /^Mad/i }
    }, {
        "name": 1,
         "district": 1,
          "address.coord": 1,
           "cuisine": 1
}).pretty();

