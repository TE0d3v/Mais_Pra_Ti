// calculadora com switch

// Usa 'prompt-sync' para receber entrada do usuário no terminal Node.js
const prompt = require('prompt-sync')();

// Recebendo os números e a operação
let numA = parseFloat(prompt("Digite o primeiro numero: "));
let numB = parseFloat(prompt("Digite o segundo numero:  "));
let operacao = prompt("Digite a operação desejada: (+, -, *, /): ");

let resultadoCalc = 0;

switch (operacao) {
    case "+":
        resultadoCalc = numA + numB;
        console.log(`O resultado da soma entre "${numA}" e "${numB}" é ${resultadoCalc}`);
        break;
    case "-":
        resultadoCalc = numA - numB;
        console.log(`O resultado da subtração entre "${numA}" e "${numB}" é ${resultadoCalc}`);
        break;
    case "*":
        resultadoCalc = numA * numB;
        console.log(`O resultado da multiplicação entre "${numA}" e "${numB}" é ${resultadoCalc}`);
        break;
    case "/":
        if (numB !== 0) {
            resultadoCalc = numA / numB;
            console.log(`O resultado da divisão entre "${numA}" e "${numB}" é ${resultadoCalc}`);
        } else {
            console.log("Inválido: divisão por zero!");
        }
        break;
    default:
        console.log("Operação inválida");
        break;
}