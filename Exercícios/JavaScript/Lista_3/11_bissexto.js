function _anoBissexto(ano) {
	let Q = ano % 4 == 0;
	let C = ano % 100 == 0;
	let M = ano % 1000 == 0;

	return M || (Q && !C);
}

function anoBissexto(ano) {
	if (ano % 1000 == 0) return true;

	return ano % 4 == 0 && ano % 100 != 0;
}

console.log(anoBissexto(2020));
console.log(anoBissexto(2024));
console.log(anoBissexto(1999));
console.log(anoBissexto(2014));
console.log(anoBissexto(2025));
console.log(anoBissexto(1900));
console.log(anoBissexto(2000));
console.log(anoBissexto(2100));