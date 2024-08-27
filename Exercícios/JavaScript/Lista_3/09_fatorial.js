function fatorial(N) {
	for(var i=1, total=1; i<=N; total *= i++);

	return total;
}

console.log(fatorial(5));
console.log(fatorial(0));
console.log(fatorial(3));
console.log(fatorial(12));