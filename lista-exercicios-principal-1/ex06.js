// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

let ladoA = 15;
let ladoB = 20;
let ladoC = 15;

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    console.log("Os lados formam um triângulo");
    }else{
        console.log("Os lados não formam um triângulo");
    }

    if (ladoA == ladoB && ladoB == ladoC) {
        console.log("É um triângulo equilatero");
    } else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
        console.log("É um triângulo isóceles");
    } else {
        console.log("É um triângulo escaleno");
    }