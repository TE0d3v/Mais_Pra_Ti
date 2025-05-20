// // let fruitlist = Array();
// // let namelist = ['pedro', 'joão', 'marta'];

// // fruitlist[0] = 'banana'
// // fruitlist[1] = 'maça'

// // // mostra o array inteiro sem os indices e seus respectivos valores
// // // console.log(fruitlist)
// // // mostra o array inteiro com os indices e seus respectivos valores
// // // console.table(fruitlist)

// // // console.log(namelist)
// // // mostra o array inteiro com os indices e seus respectivos valores
// // // console.table(namelist)

// // // for (let i = 0; i < namelist.length; i++) {
// // //     console.log(namelist[i])
// // // }

// // // adiciona um novo item ao array na ultima posicao
// // fruitlist.push('abacaxi')

// // // adiciona um novo item ao array na primeira posicao
// // fruitlist.unshift('manga')
// // console.log(fruitlist)

// // // remove o ultimo item do array
// // fruitlist.pop()

// // // remove o primeiro item do array
// // fruitlist.shift()
// // console.log(fruitlist)

// // // retorna a posicao de um item do array e retorna -1 se nao encontrar
// // let result = namelist.indexOf('joão')
// // console.log(result)

// // // retorna o ultimo item do array
// // console.log(fruitlist[1])

// // crie um array chamado 'numeoros' contendodo 10 
// // valores nunméricos de sua escolha
// // use métodos de array para calcular:
// // a) a soma de todos os valores do array
// // b) a media de todos os valores do array
// // c) gere um novo array chamando 'numerosPares' contendo apenas os valores pares do array 'numeros'

// let numeros = [1,5,2,12,14,32,21,11,15,10];
// // console.table(numeros);

// // // reduce -> reduz um array a um unico valor com base em uma funcao
// // // sintaxe: array.reduce((res, numAtual) => res + numAtual, 0)                            //  
// const soma = numeros.reduce((RES, Numatual) => RES + Numatual, 0);
// // console.log(soma);

// const media = (soma / numeros.length).toFixed(1);
// // console.log(media);   

// // // gere um novo array chamando 'numerosPares' contendo apenas os valores pares do array 'numeros'
// // const Pares = numeros.filter(num => num % 2 == 0);
// // console.table(Pares);

// // metodos de arrays
// // .push() adiciona um item ao final do array
// // .pop() remove o ultimo item do array
// // .shift() remove o primeiro item do array
// // .unshift() adiciona um item ao inicio do array
// // .indexOf() retorna a posicao de um item do array e retorna -1 se nao encontrar
// // .findIndex() retorna a posicao de um item do array e retorna -1 se nao encontrar
// // .includes() retorna true ou false se o item estiver no array
// // .forEach() executa uma funcao para cada item do array
// // .map() retorna um novo array com os valores modificados
// // .filter() retorna um novo array com os valores filtrados
// // .reduce() retorna um unico valor com base em uma funcao
// // .sort() ordena o array
// // .reverse() inverte o array
// // .concat() concatena dois arrays

// // bubble sort
// // for (let i = 0; i < numeros.length; i++) {
// //     for (let j = i + 1; j < numeros.length; j++) {
// //         if (numeros[i] > numeros[j]) {
// //             let temp = numeros[i];
// //             numeros[i] = numeros[j];
// //             numeros[j] = temp;
// //         }
// //     }
// // }

// arrays multidimensionais ou matrizes
let matriz = []

for (i = 1; i <= 3; i++) {
    matriz[i] = [];
    let y = 10
    for (j = 1; j <= 3; j++) {
        matriz[i][j] = y++;      
    }
}

console.table(matriz);

// calcular a diagonal de uma matriz
let somaDiagonal = 0;

for(let i = 1; i <= 3 ; i++){
    somaDiagonal += matriz[i][i]
}

console.log(`a soma da diagonal é: `, somaDiagonal)