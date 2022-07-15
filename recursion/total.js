const total = (arr) => {
	count = 0;
	if(arr.length == 1){
		return 1;
	} else {
		count += 1;
		arr.pop();
		return count += total(arr);
	}
}

console.log(total([1, 2, 3, 4, 5, 6]));