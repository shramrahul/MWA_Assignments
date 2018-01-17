const tree = { 
	name : "home", 
	files : ["notes.txt","todo.txt"], 
	subFolders: [	
		{ name : "payroll", 
		  files : ["paper.pdf","funds.csv"], 
		  subFolders: [] 
		}, 
		{ name: "misc", 
		  files : ["summer1.jpg","summer2.jpg", "summer3.jpg"], 
		  subFolders: [
			{ name : "logs", 
			  files : ["logs1","logs2","logs3","logs4"], 
			  subFolders: [] 
		  }] 
	}] 
}; 


	// function find(file){

	// 	return function(tree){
	// 		var i=0;
	// 		var sub= tree.subFolders;
	// 		function search(tree,i){
				
	// 			for (let x of sub[i].files){
	// 				if(x==file) return true;
	// 			}
	// 			return false;
	// 		}
			
	// 		if(i==tree.subFolders.length) return false;
	// 		else return search(tree,i);

	// 	}
	// }

const find = data => tree => {
	let res = false;
	for(let i in tree.files) {
		if(tree.files[i] == data) {
			res = true;
		}
	}

	if(!res) {
		for(let j in tree.subFolders) {
			let response = find(data)(tree.subFolders[j]);
			if(response) {
				res = true;
				break;
			}
		}
	}

	return res;	
}


console.log(find("paper.pdf")(tree)); // true 
console.log(find("randomfile")(tree)); // false