// console.log('Hello, World "Mané"');
// Exemplo de string com aspas duplas dentro de aspas simples

//" "	Strings padrão (permite ' dentro)	"Ele disse: 'Oi!'"
//' '	Strings padrão (permite " dentro)	'Ela gritou: "Socorro!"'
//` `	Template literals (interpolação e multilinha)	`Nome: ${nome}`
// Exemplos de como declarar strings em JS e o uso de aspas dentro delas

// console.log(typeof(1.1))
// console.log(typeof("1.5"))
// typeof retorna o tipo da variável — number ou string, por exemplo

// let nome = "Pedro";
// let name = "Tayonara";
// console.log(`o meu nome é ${nome} e o dela é ${name}`);
// Template string com interpolação de variáveis usando crase (`)


// var: forma antiga de declarar variável (evitar usar hoje)
// let: cria variável que pode mudar depois
// const: cria uma constante (não pode mudar depois)
// Variável sem valor inicial é undefined

// let numa = 10;
// let numb = 5;

// Aqui houve um erro: você declarou "numa" e "numb", mas está usando "num1" e "num2" abaixo
// console.log(num1 + num2); // Isso daria erro! (deveria ser numa + numb)
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 ** num2); // Exponenciação
// console.log(num1 % num2);  // Resto da divisão

// Correto seria:
// console.log(numa + numb);
// console.log(numa - numb);
// console.log(numa * numb);
// console.log(numa / numb);
// console.log(numa ** numb);
// console.log(numa % numb);

// let A = "4"
// console.log(parseInt(A) + 10);
// // parseInt converte a string "4" para número inteiro e soma com 10

// // Incrementos acumulados
// let counter = 1;
// let step = 2;

// counter += step // equivale a counter = counter + step
// counter += step
// counter += step
// counter += step
// counter += step
// counter += step
// counter += step
// console.log(counter) // Mostra o valor final de counter após várias somas

// // Comparações
// // == compara apenas o valor
// // === compara valor e tipo
// console.log((10 > 5) && (10 > 2)) // true
// console.log(!(10 > 5) && !(10 > 2)) // false

// // Autenticação simples
// let usuario = "pedro";
// let senha = "123";
// let autentic = usuario === 'pedro' && senha === '123';
// console.log(autentic) // true

// // Validação de faixa etária
// const idade = 60;
// if((idade >= 18) && (idade <= 60)){
//     console.log("Pode se inscrever")
// } else {
//     console.log("Não pode se inscrever")
// }

// // Expressão ternária equivalente ao if acima (com faixa diferente)
// let resultado = (idade >= 18  && idade <= 32) ? console.log("Pode se inscrever") : console.log("Não pode")