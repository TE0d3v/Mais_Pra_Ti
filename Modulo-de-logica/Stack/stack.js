// Classe que representa um nó da lista encadeada
class Node {
    constructor(value) {  // Correção: faltava o parâmetro value aqui
        this.value = value  // Valor armazenado no nó
        this.next = null    // Referência para o próximo nó (inicialmente null)
    }
}

// Classe que implementa a pilha usando lista encadeada
class Stack {
    constructor() {
        this.top = null  // Topo da pilha (inicialmente vazio)
    }

    // Método para adicionar um elemento no topo da pilha
    push(value) {
        let newNode = new Node(value)  // Cria um novo nó
        newNode.next = this.top      // O próximo do novo nó aponta para o antigo topo
        this.top = newNode          // Atualiza o topo para ser o novo nó
    }

    // Método para remover e retornar o elemento do topo
    pop() {
        if (!this.top) {            // Se a pilha estiver vazia
            return null
        }

        let poppedValue = this.top.value  // Salva o valor do topo
        this.top = this.top.next         // Atualiza o topo para o próximo nó
        return poppedValue               // Retorna o valor removido
    }

    // Método para ver o elemento do topo sem remover
    peek() {
        if (!this.top) return null  // Se vazia, retorna null
        return this.top.value       // Retorna o valor do topo
    }

    // Verifica se a pilha está vazia
    isEmpty() {
        return this.top === null    // Retorna true se topo for null
    }
}

// Implementação alternativa de pilha usando array
function Stack() {
    this.itens = []   // Array para armazenar os elementos
    this.top = -1     // Índice do topo (inicia em -1 para pilha vazia)

    // Adiciona um elemento no topo da pilha
    this.push = function(value) {
        this.top++                   // Incrementa o índice do topo
        this.itens[this.top] = value // Armazena o valor na posição
    }

    // Remove e retorna o elemento do topo
    this.pop = function() {
        if (this.top < 0) return null  // Se pilha vazia
        let value = this.itens[this.top]  // Pega o valor do topo
        this.top--                      // Decrementa o índice
        return value                    // Retorna o valor
    }
    
    // Observação: Faltaram os métodos peek() e isEmpty() nesta implementação
}