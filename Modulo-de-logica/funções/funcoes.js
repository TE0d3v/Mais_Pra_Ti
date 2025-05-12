function ParouImpar(valor){
    let resultado
    if (valor % 2 === 0 ){
        resultado = "Par"
    }else {
        resultado = "Impar"
    }
    console.log(resultado);
    return resultado;
}
// pode usar dando retorno de algum valor ou então com o console log sem o return essa maneira se chama procedimento ou procedimento sem retorno
let resposta = ParouImpar(4);
console.log(resposta);

ParouImpar(4);


function Calcarea(Largura, Altura){
    let area = Altura * Largura;
    console.log(area);
}

Calcarea(10, 20);

function ordenacao(numeros){
    numeros.sort((a, b) => a - b);
}
ordenacao(numeros);
console.log(numeros);
console.table(numeros);

// quando se tem uma função passada por parametro isso se chama callback
// funções anonimas ou arrow function -> () => {}
let teste = function(){
    console.log("Teste");
}
teste();

let teste2 = (teste) => {console.log(teste)}
teste2('Teste2');

function showMessage(success, error) {
    if (false) {
        success();
    } else {
        error();
    }
}

let success = () => { console.log("Success") }
let error = function () {
    console.log("Error")
}

showMessage(success, error);

let numeros = [1, 5, 2, 12, 14, 32, 21, 11, 15, 10];
function soma(arr) {
   return arr.reduce((RES, NumAtual) => RES + NumAtual, 0);
}
console.log(soma(numeros));
// poderia ter sido feito de seguinte maneira
function res(ara){
    let soma = 0 
    // esse for serve para percorrer o array e somar os valores do array 
    for (let i = 0; i < ara.length; i++){
        soma += ara[i];
    }
    return soma
}
console.log(res(numeros))

function maior(arr){
// define a variavel maior com o primeiro valor do array
    let maior = arr[0];
// percorre o array do inicio ao fim
    for (let i = 0; i < arr.length; i++){
// se o valor do array for maior que a variavel maior ele recebe o valor do array
        if(arr[i] > maior){
            maior = arr[i];
        }
    }
    return maior
}
console.log(maior(numeros));

let ParouImpar = function(valor){
    let resultado
    if (valor % 2 === 0 ){
        resultado = "Par"
    }else {
        resultado = "Impar"
    }
    return resultado;
}

function verify(arr, callback){
    let pares = []
    for (let i = 0; i < arr.length; i++){
        let resultado = callback(arr[i])
        if (resultado === "Par"){
            pares.push(arr[i])
        }
    }
    return pares
}

console.log(verify(numeros, ParouImpar));