var sub = function (num1,num2) {
return (num1 - num2);
}

var add = function (num1, num2) {
return (num1 + num2);
}

var combine = function (num1, num2, boolie) {
	
	if(boolie) {
		return add(num1,num2);
	}

	else {
		return sub(num1,num2);
		}
}

var outcome = combine(4,5,false);
console.log(outcome);
