
var item= {
	"category":"food",
	"name":"Biscuit",
	"type":"regular",
	"price":2.0
}

function applyCoupan(cat){
	return function (discount){
		return function(item1){
			
						
			if(item1.category== cat){
				item1.price=item1.price*(1-discount)
				return item1
			}
			
		}
	} 
}

console.log(applyCoupan("food")(0.1)(item).price==1.8)