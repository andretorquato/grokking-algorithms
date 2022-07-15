const sum = (arr) => {
	if(arr.length == 1) {
		return arr[0]
	} else {
		let lastValue = arr[arr.length - 1]
		arr.pop()
		return sum(arr) + lastValue;
	}
}
console.log(sum([0, 2, 1, 3, 4, 5]))