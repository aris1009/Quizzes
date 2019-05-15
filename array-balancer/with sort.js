Array.prototype.balance = function (input) {
	if (this.some(isNaN)) return 'Provide an array with numerals only.';
	let sorted = this.sort((a, b) => a - b).concat(); // Sort ascending and create shallow copy.

	for (let i = input; i > 0;) { // While there is weight to distribute, keep looping.
		let count = 0;
		for (let j = 0, l = sorted.length; j < l; j++) {
			if (sorted[j] == sorted[0]) count++; else break; // Get count of min value elements. Index 0 is always min value, since the array is sorted.
		}
		let distribute = (sorted[count] - sorted[count - 1]) * count; // Calculate how much is needed to distribute to lowest values to reach next bigger value in array.
		if (distribute <= i) {  // If weight to be distributed is lower than input, distribute and repeat
			i -= distribute;
			for (let j = count - 1; j >= 0; j--) sorted[j] += Number((distribute / count).toFixed(2));
		} else {  // If not, distribute what we currently have and end.
			for (let j = count - 1; j >= 0; j--) sorted[j] += Number((i / count).toFixed(2));
			i = 0;
		}
	}
	return sorted;
}

let testArrays = [
	[0, 0, -30, 0, 0, 2, 3, 6],
	[2, 'string'],
	[5, 7.5],
	[2, 3, 0],
	[2.22, 3.6, 6.9],
	[2, 0, 0],
	[1],
	[-3, -3, 0, -3]
]
let toBeDistributed = 33

console.time('test');

console.log(`Distributed: ${toBeDistributed}\n`)
for (let arr of testArrays) {
	let result = arr.balance(toBeDistributed);
	if (Array.isArray(result)) {
		console.log(`Original	(${arr.length}):	${arr.join('	')}\nResult		(${result.length}):	${result.join('	')}\n`);
	} else {
		console.log(`${result}\n`);
	}
}

console.timeEnd('test');