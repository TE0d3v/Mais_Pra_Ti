// Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let a = 0;
let b = 1;
//o for inicia com 1 e termina com 8 porque os dois primeiros numeros da sequência de fibonacci são 0 e 1.

for (let i = 1; i <= 8 ; i++){
    let c = a + b;
    a = b;
    b = c;
    console.log(c);
}

