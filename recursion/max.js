const maxValue = (arr) => {
	let max = 0;
	if(arr.length == 1) {
		return arr[0];
	} else {
		max = arr[arr.length - 1];
		arr.pop();
		return maxValue(arr) > max ? maxValue(arr) : max;
	}
}

console.log(maxValue([15, 3, 0, 2, 12]));