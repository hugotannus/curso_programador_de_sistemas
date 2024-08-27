function menorDeTres(a,b,c) {
	let menor = a < b ? a : b;

	return c < menor ? c : menor;
}

console.log(menorDeTres(3,7,5))
console.log(menorDeTres(-1,-5,-3))
console.log(menorDeTres(8,2,10))