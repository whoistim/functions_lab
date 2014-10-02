var arr01 = [1,2,8,11,27,28];
var arr02 = [2,3,7,12,27,101];



var merger = function(arr1,arr2) {
	var arr3 = [];
	while (arr1.length>0 && arr2.length>0){
		if(arr1[0]<arr2[0]) {
			arr3.push(arr1.shift());
		}
		
		else {
			arr3.push(arr2.shift());
		}
	}
	if(arr1.length>0) {
		return arr3.concat(arr1);
	}
	else {
		return arr3.concat(arr2);
	}
}
merger (arr01,arr02);
