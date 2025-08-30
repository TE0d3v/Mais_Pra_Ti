// 1. Acessar os elementos do HTML que vamos manipular
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

// 2. Percorrer a lista de botões e adicionar um "ouvinte" de evento de clique a cada um
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Pega o valor de texto do botão que foi clicado (ex: "7", "+", "C")
        const value = e.target.innerText;

        // 3. Decide o que fazer com base no valor do botão clicado
        if (value === 'C') {
            // Se o botão for 'C', simplesmente limpa a tela.
            display.value = '';
        } else if (value === '=') {
            // Se o botão for '=', tenta calcular o resultado.
            try {
                // A função eval() pega a string do display (ex: "2+5*2") e a executa como código, retornando o resultado.
                // ATENÇÃO: A função eval() é insegura em aplicações reais se a string não for controlada.
                // Para nossa calculadora, é a maneira mais simples e direta de obter o resultado.
                display.value = eval(display.value);
            } catch (error) {
                // Se a conta for inválida (ex: "5++2"), o eval() causa um erro.
                // O bloco 'catch' captura esse erro e exibe uma mensagem amigável no display.
                display.value = 'Erro';
            }
        } else {
            // Para todos os outros botões (números e operadores),
            // apenas adicionamos o valor do botão ao que já está na tela.
            display.value += value;
        }
    });
});
