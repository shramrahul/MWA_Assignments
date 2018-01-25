/* Qno 1 */

db.zips.aggregate([
    {$group:{
        _id:"$city",
        zips:{$push:"$_id"}
    } },
    {$project:{
        zips:1
    }     
    }
]);


/*q no 2 */

db.zips.aggregate([
    {$match:{pop:{$lt:1000}}},
    {$group:{
        _id:"$city",
        zips:{$push:"$_id"}
    } },
    {$project:{
        zips:1
    }     
    }
]);


/*q no 3 */

db.zips.aggregate([
    {$group:{
        _id:{city:"$city",state:"$state"},
        zips:{$push:"$_id"},  
    }},      
    {$project:{
        _id:0,
        city:"$_id.city",
        state:"$_id.state",
         zips: {$size: "$zips"} 
    } 
    },{$match:
        {zips : {$gt:2}}
    },
    {$sort:
        {city:1, state:-1}
    }
]);




/*Q no 4*/


db.zips.aggregate([
    {$group: {
    _id: {city:"$city", state:"$state"},
     pop: {$sum: "$pop"}} 
    },    

    {$group: {
        _id: "$_id.state", 
        city: {$first: "$_id.city"}, 
        pop: {$min: "$pop"} } }, 

      {$sort: 
            {"_id": 1}
       },

    ])






    