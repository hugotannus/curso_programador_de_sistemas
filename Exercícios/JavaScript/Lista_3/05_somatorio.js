function somatorio(N) {
	for(var i=0, total=0; i<N; total += ++i);

	return total;
}

console.log(somatorio(5));
console.log(somatorio(10));
console.log(somatorio(1));
console.log(somatorio(64));