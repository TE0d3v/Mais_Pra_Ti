//EXEMPLOS DE METODOS UTEIS
/*
// length - para obter o número de caracteres na string (inclui espaços)
console.log("Enzo Grigol".length); // 11

// charAt() - para obter o caractere em uma posição específica (começa em 0)
console.log("Enzo Grigol".charAt(0)); // "E"

// indexOf() - para encontrar a posição da primeira ocorrência de um caractere ou substring
console.log("Enzo Grigol".indexOf('i')); // 7

// replace() - para substituir uma parte da string por outra
console.log("Enzo Grigol".replace('Enzo', 'Guilherme')); // "Guilherme Grigol"

// substr() - para extrair parte da string, começando de um índice e pegando uma certa quantidade de caracteres
//substr(7, 8) começa no índice 7 (onde está a letra 'i') e tenta pegar 8 caracteres a partir daí.
console.log("Enzo Grigol".substr(7, 8)); // "igol"

// toUpperCase() - para converter todos os caracteres da string para letras maiúsculas
console.log("Ronan".toUpperCase()); // "RONAN"

// toLowerCase() - para converter todos os caracteres da string para letras minúsculas
console.log("Ronan".toLowerCase()); // "ronan"

// trim() - para remover espaços em branco do início e do fim da string
console.log("   Enzo Grigol   ".trim()); // "Enzo Grigol"

// Math.ceil() - arredonda o número para cima, para o inteiro mais próximo
console.log(Math.ceil(9.5)); // 10

// Math.floor() - arredonda o número para baixo, para o inteiro mais próximo
console.log(Math.floor(9.5)); // 9

// Math.round() - arredonda o número para o inteiro mais próximo (acima ou abaixo, dependendo da parte decimal)
console.log(Math.round(9.4)); // 9

// Math.sqrt() - retorna a raiz quadrada do número
console.log(Math.sqrt(81)); // 9

// Math.pow() - eleva um número à potência de outro (base, expoente)
console.log(Math.pow(81, 2)); // 6561

// Math.cbrt() - retorna a raiz cúbica de um número
console.log(Math.cbrt(81)); // 4.3267487109222245

// Math.abs() - retorna o valor absoluto (ou seja, sem sinal negativo)
console.log(Math.abs(81.123123123)); // 81.123123123

// Math.random() - gera um número decimal aleatório entre 0 (inclusive) e 1 (exclusivo)
// Multiplicado por 100 para simular um número aleatório de 0 a 100
console.log(Math.random() * 100); // exemplo de saída: 72.568912346 (o valor muda a cada execução) */

//MANIPULACAO DE DATAS
/*
let date = new Date(); // cria um novo objeto com a data e hora atual

// getDate() - retorna o dia do mês (1 a 31)
console.log(date.getDate()); // ex: 12

// getMonth() - retorna o mês (0 a 11). Janeiro é 0, dezembro é 11 — por isso somamos +1
console.log(date.getMonth() + 1); // ex: 5 (maio)

// getFullYear() - retorna o ano com quatro dígitos
console.log(date.getFullYear()); // ex: 2025

// toString() - retorna a data e hora atual em formato de string legível
console.log(date.toString()); // ex: "Mon May 12 2025 14:23:45 GMT-0300 (Horário Padrão de Brasília)" */

//================================================================================

// Cria um objeto de data representando 5 de agosto de 2025
//let date1 = new Date(2025, 7, 5); // Mês é 0-based: 7 representa agosto

// Cria um objeto de data representando 5 de agosto de 2002
//let date2 = new Date(2002, 7, 5);

//console.log(date1.toString()); // ex: "Tue Aug 05 2025 00:00:00 GMT-0300 (Horário Padrão de Brasília)"
//console.log(date2.toString()); // ex: "Mon Aug 05 2002 00:00:00 GMT-0300 (Horário Padrão de Brasília)"

// getTime() - retorna o número de milissegundos desde 1º de janeiro de 1970 (Epoch time)
//console.log(date1.getTime()); // ex: 1754341200000

//====================================================================
//EXEMPLO
// Calcula a diferença em milissegundos entre as duas datas
/*let milissegundosEntreDatas = Math.abs(date1.getTime() - date2.getTime());
console.log(milissegundosEntreDatas); // ex: 839808000000 (depende das datas)

// Define a quantidade de milissegundos em 1 dia
let milissegundosPorDia = 1 * 24 * 60 * 60 * 1000;

// Calcula a diferença entre as datas em dias, usando Math.ceil para arredondar para cima
console.log(`A diferença entre as datas é de ${Math.ceil(milissegundosEntreDatas / milissegundosPorDia)} dias`);
// ex: "A diferença entre as datas é de 839808000 dias"*/


/* Math.abs() é utilizado para garantir que a diferença seja sempre positiva,
 independentemente da ordem das datas.

milissegundosPorDia é o número de milissegundos em 1 dia.

Math.ceil() arredonda o valor da diferença para o número inteiro mais próximo
acima (para garantir que não ocorra arredondamento para baixo). */
//================================================================================

//reverter uma string

// Função que recebe uma string como parâmetro e retorna essa string invertida
/*function reverterString(str) {

    // split("") - divide a string em um array de caracteres
    // reverse() - inverte a ordem dos elementos no array
    // join("") - junta os elementos do array de volta em uma string
    return str.split("").reverse().join("");
}/*

// Exemplo de uso da função com a string 'Olá, mundo!'
/*console.log(reverterString('Olá, mundo!')); // "!odnum ,álO"


let str = "Olá, mundo!";

// Dividir a string em um array de caracteres
let arrayDeCaracteres = str.split("");
console.log(arrayDeCaracteres); // ["O", "l", "á", ",", " ", "m", "u", "n", "d", "o", "!"]


let arrayDeCaracteres2 = ["O", "l", "á", ",", " ", "m", "u", "n", "d", "o", "!"];

// Inverter a ordem do array
let arrayInvertido = arrayDeCaracteres2.reverse();
console.log(arrayInvertido); // ["!", "o", "d", "n", "u", "m", " ", ",", "á", "l", "O"] */

//============================================================================
//formatem uma data

// EXEMPLO 1
// Função que recebe uma data como parâmetro e retorna essa data formatada
/*// Cria um novo objeto Date com a data e hora atual
let date1 = new Date();

// Função que formata a data no formato "dd/mm/aaaa", com zeros à esquerda se necessário
function formatardata(date) {
    // getDate() pega o dia do mês, convertemos para string e usamos padStart para garantir 2 dígitos
    let dia = date.getDate().toString().padStart(2, '0'); // ex: 5 vira "05"

    // getMonth() retorna de 0 a 11, então somamos 1. Também usamos padStart para garantir 2 dígitos
    let mes = (date.getMonth() + 1).toString().padStart(2, '0'); // ex: 4 (maio) vira "05"

    // getFullYear() já retorna 4 dígitos, então não precisa de padStart
    let ano = date.getFullYear();

    // Retorna a data formatada como "dd/mm/aaaa"
    return `${dia}/${mes}/${ano}`;
}

// Exibe a data formatada no console
console.log(formatardata(date1)); // ex: "12/05/2025"
 */
//===============================================================

// EXEMPLO 2
// Cria um novo objeto Date com a data e hora atual do sistema
/*let date1 = new Date(); 

// Define uma função chamada formatardata que recebe um objeto Date como parâmetro
function formatardata(date) {

    // getDate() retorna o dia do mês (de 1 a 31)
    // getMonth() retorna o mês (de 0 a 11), então adicionamos +1 para representar corretamente o mês
    // getFullYear() retorna o ano com 4 dígitos

    // Aqui estamos concatenando os valores com '/' para formar uma string no formato "dia/mês/ano"
    return (date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear());
}

// Chama a função passando o objeto date1, e imprime a data formatada no console
console.log(formatardata(date1)); // ex: "12/5/2025" (se hoje for 12 de maio de 2025) */

// gerar numero randomico entre dois valores
 /* function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }  

  console.log(gerarNumeroAleatorio(10, 20))

 
//EXPLICACAO
Math.random() → 0.57 (exemplo)
(max - min + 1) → (20 - 10 + 1) = 11
0.57 * 11 = 6.27
Math.floor(6.27) = 6
6 + min (10) = 16 */

//===========================================================
//Contem as vogais em uma string
//EXEMPLO 1
// Função que conta quantas vogais existem em uma string
/*
function contarVogais(string) {
    // Definimos uma string com todas as vogais maiúsculas e minúsculas
    let vogais = "aeiouAEIOU";

    // Inicializamos a variável que vai armazenar a contagem
    let contagem = 0;

    // Percorremos cada caractere da string fornecida
    for (let i = 0; i < string.length; i++) {
        // Verificamos se o caractere atual está dentro da string de vogais
        if (vogais.includes(string[i])) {
            contagem++; // Se for vogal, incrementamos a contagem
        }
    }
    // Retornamos o total de vogais encontradas
    return contagem;
}
// Chamamos a função e mostramos o resultado no console
console.log(contarVogais("fabiana")); // Saída: 4 */

//EXEMPLO 2
// Função que conta quantas vogais existem em uma string
function countVowels(str) {
    
    // Usa uma expressão regular para encontrar todas as vogais (a, e, i, o, u)
    // 'g' (global) encontra todas as ocorrências, 'i' (ignore case) ignora maiúsculas/minúsculas
    ///[aeiou]/gi: Essa é a expressão regular (RegEx) usada para encontrar as vogais.
    //vowels agora conterá um array com todas as vogais encontradas ou null se não encontrar nenhuma vogal.
    let vowels = str.match(/[aeiou]/gi);

    // Se 'vowels' contém algum valor (não é null ou undefined), retorna o número de vogais encontradas
    // Caso contrário, retorna 0 (caso não tenha nenhuma vogal na string)
    return vowels ? vowels.length : 0;
}

// Chama a função countVowels com a string "Grêmio Tetra Campeão da Libertadores" e imprime o resultado
console.log(countVowels('Grêmio Tetra Campeão da Libertadores')); // Saída: 13






