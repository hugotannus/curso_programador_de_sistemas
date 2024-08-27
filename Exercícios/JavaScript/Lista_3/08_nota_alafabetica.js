function notaAlfabetica(nota) {
	if(nota >= 90) return "A";
	if(nota >= 80) return "B";
	if(nota >= 70) return "C";
	if(nota >= 60) return "D";

	return "F";
}

console.log(notaAlfabetica(90));
console.log(notaAlfabetica(70));
console.log(notaAlfabetica(60));
console.log(notaAlfabetica(80));
console.log(notaAlfabetica(59));
console.log(notaAlfabetica(89));
console.log(notaAlfabetica(69));
console.log(notaAlfabetica(79));
console.log(notaAlfabetica(99));