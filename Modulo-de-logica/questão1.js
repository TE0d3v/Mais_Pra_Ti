//receber input de grau em celsius e converter para fahrenheit

const prompt = require('prompt-sync')();

let celcius = parseFloat(prompt("Digite a temperatura em graus celcius: "));

let FH = celcius * 1.8 + 32;

console.log(`A temperatura em Fahrenheit é: ${FH}`);


