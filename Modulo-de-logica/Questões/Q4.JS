// Calcular o MDC entre dois números

// receber input do usuário

// let num1 = 36;
// let num2 = 60;
// let resto = 0;


const prompt = require('prompt-sync')();
let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));
let resto;

// Encontrar o MDC
while (num2 !== 0) {
    resto = num1 % num2;
    num1 = num2;
    num2 = resto;
}
console.log(`O MDC é: ${num1}`);