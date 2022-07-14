const maxValue = (arr) => {
	let max = 0;
	if(arr.length == 1) {
		return arr[0];
	} else {
		const lastMaxValue = arr[arr.length - 1];
		arr.pop();
		const currentMaxValue = maxValue(arr);
		if(lastMaxValue > max) max = lastMaxValue;
		if(currentMaxValue > max) max = currentMaxValue;
		return `O maior valor encontrado foi: ` + max;
	}
}

console.log(maxValue([15, 3, 0, 2, 12]));