function isWeekend(){
	const todayDate= new Date();
	const day= todayDate.getDay();
	var ret="";
		switch(day){
            case 0:
            case 7: return "weekend";
		}
		
		return "weekday";
	
}

console.log(isWeekend());
