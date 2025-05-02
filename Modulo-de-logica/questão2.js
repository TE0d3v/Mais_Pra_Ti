// Escreva um algoritmo para ler o número de eleitores de um município, o número de votos
// brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao
// total de eleitores.

const prompt = require('prompt-sync')();

const totalEleitores = parseInt(prompt("Digite o total de eleitores: "));
const brancos = parseInt(prompt("Digite a quantidade de votos em branco: "));
const nulos = parseInt(prompt("Digite a quantidade de votos nulos: "));
const validos = parseInt(prompt("Digite o quantidade de votos validos: "));

const percentualBrancos = (brancos / totalEleitores ) * 100;
const percentualNulos = (nulos / totalEleitores) * 100;
const percentualValidos = (validos / totalEleitores) * 100 ;

console.log(`O percentual de votos em branco foi de ${percentualBrancos.toFixed(2)}%\n`);
console.log(`O percentual de votos nulos foi de ${percentualNulos.toFixed(2)}%\n`);
console.log(`O percentual de votos validos foi de ${percentualValidos.toFixed(2)}%\n`);
