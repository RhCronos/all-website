//let countries = ["bd","mr","nepal","yo"];

//alert(countries.length);
//document.write(countries);
//console.log(countries[2]);

//const employee = new Array("rownak","hasan","somoy");

//console.log(employee[2] = "heheboyy!!");
//console.log(employee);

//push
//console.log(employee.push("cronos","krronos"));
//console.log(employee);

//push
//console.log(employee.pop());
//console.log(employee);

//unshift
//console.log(employee);
//console.log(employee.unshift("cronos","krronos"));
//console.log(employee);

//shift
//console.log(employee);
//console.log(employee.shift());
//console.log(employee);

/*
for(x=1; x<=15; x++){
	console.log(`output is: ${x}`);
}
console.log("end of line");  */


/*
for(x=1; x<=15; x++){
	if(x == 7){
		console.log("yooooooooooo");
		
	}
	console.log(`output is: ${x}`);
}
console.log("end of line");  */


/*  var n = parseInt(prompt("enter your number:"));
var sum = 0;
var series = "";

for(var i = 1; i<=n; i++){
	sum += i**2;
	series += (i**2).toString() + " ";
	console.log(series);
}

console.log(series);
console.log(sum); */


/*const person = {
	fname : "rh",
	sname : "cronos",
	
	fullname : function(){
		//console.log("yoooooooooo");
		return `my full name is : ${this.fname} ${this.sname}`;
	}
}*/

class person{
	constructor( name, lname){
		this.fname = name;
		this.sname = lname;
		
	}
}
let person1 = new person("rownak", "somoy");
let person2 = new person("rh", "cronos");

console.log(person1);
console.log(person2);

