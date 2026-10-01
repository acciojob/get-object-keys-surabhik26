//your JS code here. If required.
let student={
	name: "John"
};

function getKeys(obj){
	return Object.keys(obj);
}

console.log(getKeys(student));

let multipleProperties= {
	name: "Johnny",
	age: 34,
	city: "London"
};

console.log(getKeys(multipleProperties));