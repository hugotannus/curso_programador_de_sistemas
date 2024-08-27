function tabuada_completa() {
	for(let k=1; k<=10; k++) tabuada(k);
}

function tabuada(num) {
	for(let m=0; m<=10; m++) {
		let linha = `${num} x ${m} = ${num*m}`;
		console.log(linha);
	}
	console.log();
}

tabuada_completa();