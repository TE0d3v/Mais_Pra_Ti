//  js não é orientado a objetos e sim orientado a funções veremos melhor isso em java
//  um objeto é um conjunto de dados e funções associadas a ele 

// objetos são provenientes de classes, classes são templates de objetos
//  em java, todos os objetos herdam de um objeto chamado Object

// um objeto nada mais é do que uma representação do mundo real
// um objeto é um conjunto de atributos (variáveis) e métodos (funções)

// let Serie = {
//     nome: 'A casa coruja',
//     temporadas: 4,
//     lançamento : 2015,
//     personagens: ['Goku', 'outra criança', 'criança', 'demoninho', 'alma'],
//     status: 'finalizada',
//     avaliação: 10,
//     classificação : 'Livre',

// }

// // lembrar dos construtores


// let serie = {
//     nome: 'High School Musical',
//     dataLancamento: 2007,
//     atores: ['Zac Efron', 'Client Eastwood', 'Arthur Morgan'],
//     status: 'finalizada',
//     classificacao: 18,
//     nrTemporadas: {
//         temp: 12,
//         temp2: 1,
//         temp3: 0
//     },

//     mostrarCaracteristicas: function() {
//         return `O nome da série é: ${this.nome} a classifição é para maiores de ${this.classificacao} anos e ela está ${this.status}`
//     }
// }

// // console.log(serie.mostrarCaracteristicas())

// let livro = {
//     titulo: 'O Hobbit',
//     autor: 'J.R.R. Tolkien',
//     ano: 1925,
//     mostrarCaracteristicas: function () {
//         return `O nome do livro é: ${this.titulo}, foi lançado em ${this.ano} e quem o escrevou foi ${this.autor}`
//     }
// }

// // console.log(livro.titulo)

// let atleta = {
//     nome: 'CR7 - Flávio Caça Rato',
//     time: 'Caxias',
//     esporte: 'Beach Tenis',
//     melhorAmigo: 'Ribagol',

//     celebrarVitoria: function() {
//         console.log('SIIIIIIIII')
//     }
// }

// // atleta.celebrarVitoria()

// let atletaSecundario = atleta
// atletaSecundario.arquiRival = "Ganso"

// // console.log(atleta)
// // console.log(atletaSecundario)

// function anime(nome, personagemForte, personagemFraco, nota) {
//     this.nome = nome
//     this.personagemForte = personagemForte
//     this.personagemFraco = personagemFraco
//     this.nota = nota

//     this.mostrarAnime = function() {
//         return `
//             nome: ${this.nome},
//             maisForte: ${this.personagemForte}
//             maisFraco: ${this.personagemFraco}
//             nota: ${this.nota}
//         `
//     }
// }

// // let naruto = new anime("Naruto", "Ebisu", "Orochimaru", 5)
// // console.log(naruto.mostrarAnime())
// // let anime2 = new anime("One Piece", "Coby", "Ace", 5)
// // console.log(anime2.mostrarAnime())

// function jogos(titulo, genero, anoLancamento, empresa, jogar) {
//     return {
//         titulo, 
//         genero,
//         anoLancamento,
//         empresa,
//         jogar
//     }
// }

// let jogo = jogos("Dragon Age", "RPG", "2009", "Bioware")

// // jogo.jogar()

// let personagens = [{nome: 'Killua'}, 'Minato', 'Aiorous']

// // for(let key in personagens) {
// //     console.log(personagens[key])
// // }

// // let palavra = 'teste'

// // for(let jogo1 of Object.keys(jogo)) {
// //     console.log(jogo1)
// // }

// let professor = {
//     nome: 'Stark',
//     disciplina: 'Física',
//     notas: {
//         aluno1: [2, 5],
//         aluno2: 3,
//     }
// }

// let somaNotas = 0
// let numeroEstudantes = 0

// for(let estudante in professor.notas) {
//     somaNotas += Array.isArray(professor.notas[estudante]) ? professor.notas[estudante].reduce((acc, nota) => acc + nota, 0)/professor.notas[estudante].length : professor.notas[estudante]

//     numeroEstudantes++
// }

// let media = somaNotas/numeroEstudantes

// console.log(`A nota média turma é: ${media}`)

// if (media >= 3) {
//     console.log(`${professor.nome} está acima da média`)
// } else {
//     console.log(`${professor.nome} está abaixo da média`)
// }

// const Livraria = [
//     { titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1925 },
//     { titulo: "O Senhor dos Aneis", autor: "J.R.R. Tolkien", ano: 2000 },
//     { titulo: "GAME OF TRHONES", autor: "George Martin", ano: 2011 },
//     { titulo: "artes da guerra", autor: "Sun Tzu", ano: 2005 },
//     { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupery", ano: 1943 },
// ]

// // livro é uma variavel temporária que recebe um objeto de um array que contém o titulo, autor e ano 
// // em JS normalmente usamos o for, for in e for of

// // utilizando o for of
// // for of recebe o valor de cada indice do array
// for (let Livro of Livraria) {
//     if (Livro.ano < 2000) {
//         console.log(Livro)
//     }
// }

// // utilizando o for in 
// // for in recebe o indice do array
// for (let Livro in Livraria) {
//     if (Livraria[Livro].ano < 2000) {
//         console.log(Livraria[Livro])
//     }
// }

let Locadora = [
    { titulo: "as aventuras de pi", genero: "aventura" },
    { titulo: "Star Wars", genero: "ficcao" },
    { titulo: "It a coisa", genero: "terror" },
    { titulo: "a fuga das galinhas", genero: "animacao" },
    { titulo: "vingadores", genero: "ação" },
    { titulo: "os trapalhões", genero: "comédia" },
    { titulo: "gente grande", genero: "comédia" },
    { titulo: "os incriveis", genero: "animacao" },
    { titulo: "duro de matar", genero: "ação" },
];

let generoscont = {};
// variale temporária que ser´pa responsalvel por contar os generos da locadora

// forEach -> executa uma funcao para cada item do array
Locadora.forEach((filme) => {
    //verifica se não existe o genero no array 
    if (!generoscont[filme.genero]) {
    //se não tiver o genero no array, adiciona o genero no array com o valor 1
        generoscont[filme.genero]=1
    } else {
    //se tiver o genero no array, adiciona mais um
        generoscont[filme.genero]++
    }
});
console.table(generoscont)

// utilizando for of 
let generocont = {};

for( let filme of Locadora) {
    if (!generocont[filme.genero]) {
        generocont[filme.genero] = 1
    } else {
        generocont[filme.genero]++
    }
}
console.table(generocont)

// fatorial
fatorial = 1;
for (let i = 1; i <= 5; i++) {
    fatorial *= i
}
