// Questão 2 - definir qual dos 3 numeros é o maior

let num1 = 4;
let num2 = 2;
let num3 = 4;

if(num1 > num2 && num1 > num3) {
    console.log("o primeiro numero é o maior")
} else if(num2 > num1 && num2 > num3){
    console.log("o segundo numero é o maior")
} else if(num3 > num1 && num3 > num2){
    console.log("o terceiro numero é o maior")
} else {
    console.log("Pelo menos dois números são iguais, corrija isso!")
}