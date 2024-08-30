
const fs = require('fs');
const { printCSV } = require('csv');

const csvOscar = fs.readFileSync('./oscar_best_pictures_from_xls.csv', 'utf-8');
const columns = ["Filme", "Diretor", "Ano", "Duração", "Gênero"]

// printCSV(csvOscar);
printCSV(csvOscar, columns);
