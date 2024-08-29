function somaLista(lista) {
    let total = 0;
    let N = lista.length;

    for(let i=0; i<N; i++) {
        total += lista[i];
    }

    return total;
}

function somaNumerosPares(lista) {
    let total = 0;
    let N = lista.length;

    for(let i=0; i<N; i++) {
        if(lista[i] % 2 === 0) total += lista[i];
    }

    return total;
}

const lib = { somaLista, somaNumerosPares }

module.exports = lib;