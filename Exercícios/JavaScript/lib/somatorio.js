function somatorio(N) {
	let total = 0;

	for(let k=1; k <= N; k++) {
		total += k;
	}

	return total;
}

console.log(somatorio(5));	// 15
console.log(somatorio(10));	// 55
console.log(somatorio(1));	// 1
console.log(somatorio(64));	// 2080
console.log(somatorio(0));	// 0