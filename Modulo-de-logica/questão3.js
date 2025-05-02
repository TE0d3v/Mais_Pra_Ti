// A turma C é composta de 60 alunos, e a turma D de 20 alunos
// .Escreva um algoritmo que leia o percentual de alunos reprovados na turma C,
// o percentual de aprovados na turma D, calcule e escreva:


const prompt = require('prompt-sync')();

const turmaC = 60;
const turmaD = 20;
const total = turmaC + turmaD;

let reprovadosC = parseFloat(prompt("Digite o percentual de alunos reprovados na turma C:"));
let aprovadosD = parseFloat(prompt("Digite o percentual de alunos aprovados na turma D:"));

let quantidadeC = (reprovadosC / 100) * turmaC;
let quantidadeD = (aprovadosD / 100) * turmaD;

console.log(`Quantidade de alunos reprovados na turma C: ${quantidadeC.toFixed(2)}\n`);
console.log(`Quantidade de alunos aprovados na turma D: ${quantidadeD.toFixed(2)}\n`);