
let array = [];
let sum = 0

const newArray = (a) => {

	let x = Math.floor(Math.random()*11); 

	if (a.length == 0){
		a.push(x);
		return newArray(a);
	}
	
	sum = a.reduce((total, n) => total + n, 0);
	
	if (sum > 50) {
		return a;
	}
	if (sum < 50) {
		a.push(x);
		return newArray(a);
	}
}

console.log(newArray(array));

