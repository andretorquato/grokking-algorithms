const size = 1000;
const findValue = 531;

const array = Array.from({ length:  size }, (v, k) => k + 1);

const search = (arr, value) => {
	let min = 0;
	let max = arr.length - 1;
	let hits = 0;
	
	while(min <= max) {
		let mid = Math.round((min + max)/2);
		let hit = arr[mid];
		hits++;
		if(hit == value)
			return { message: 'Found', value, hits };
		else if (hit > value)
			max = mid - 1;
		else 
			min = mid + 1;
	}
	return { message: 'Not Found', value, hits };
}

console.log(search(array, 531));
