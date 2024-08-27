function positivoOuNegativo(num) {
	if(num == 0) return "Zero";

	return Number(num) > 0 ? "Positivo" : "Negativo";
}

console.log(positivoOuNegativo(5))
console.log(positivoOuNegativo(-3))
console.log(positivoOuNegativo(0))				// "Zero"
console.log(positivoOuNegativo("1110"))
console.log(positivoOuNegativo("-987654321"))
