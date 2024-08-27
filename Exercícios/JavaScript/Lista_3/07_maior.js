function maiorDeTres(a,b,c) {
	let maior = a > b ? a : b;

	return c > maior ? c : maior;
}

console.log(maiorDeTres(3,7,5));
console.log(maiorDeTres(-1,-5,-3));
console.log(maiorDeTres(8,2,10));