// VERIFICAR SE O NUMERO É PRIMO
const prompt = require('prompt-sync')();

const numero = parseInt(prompt("Digite um número: "));
let primo = true;

if (numero <= 1) {
    primo = false;
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            primo = false;
            break;
        }
    }
}

if (primo) {
    console.log(`✅ O número ${numero} é primo!`);
} else {
    console.log(`❌ O número ${numero} NÃO é primo.`);
}



