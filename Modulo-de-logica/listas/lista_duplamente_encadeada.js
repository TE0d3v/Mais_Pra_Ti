// Classe que representa um nó da lista
class Node {
    constructor(valor) {
        this.valor = valor           // Valor armazenado no nó
        this.anterior = null         // Ponteiro para o nó anterior
        this.proximo = null          // Ponteiro para o próximo nó
    }
}

// Classe da lista duplamente encadeada
class DoublyLinkedList {
    constructor() {
        this.head = null             // Primeiro nó da lista
        this.tail = null             // Último nó da lista
        this.length = 0              // Tamanho da lista
    }

    // Insere um nó no início da lista
    inserirInicio(v) {
        let novo = new Node(v)
        
        if (!this.head) {
            // Lista está vazia: head e tail apontam para o novo nó
            this.head = this.tail = novo
        } else {
            // Novo nó aponta para o antigo head
            novo.proximo = this.head
            // Antigo head aponta de volta para o novo
            this.head.anterior = novo
            // Novo nó vira o novo head
            this.head = novo
        }

        this.length++ // Aumenta o tamanho da lista
    }

    // Insere um nó no fim da lista
    inserirFim(v) {
        let novo = new Node(v)
        
        if (!this.head) {
            // Lista vazia: head e tail serão o novo nó
            this.head = this.tail = novo
        } else {
            // Tail atual aponta para o novo
            this.tail.proximo = novo
            // Novo aponta de volta para o tail antigo
            novo.anterior = this.tail
            // Novo vira o novo tail
            this.tail = novo
        }

        this.length++
    }

    // Insere um nó em uma posição específica
    inserirEm(indice, valor) {
        if (indice < 0 || indice > this.length)
            throw new RangeError("Índice fora dos limites")

        if (indice === 0) return this.inserirInicio(valor)
        if (indice === this.length) return this.inserirFim(valor)

        let atual = this.head
        // Percorre até o nó na posição desejada
        for (let i = 0; i < indice; i++) {
            atual = atual.proximo
        }

        let novo = new Node(valor) // ⚠️ Aqui estava 'v', troquei para 'valor'
        let noAnterior = atual.anterior

        // Conecta os ponteiros: anterior <-> novo <-> atual
        noAnterior.proximo = novo
        novo.anterior = noAnterior
        novo.proximo = atual
        atual.anterior = novo

        this.length++
    }

    // Remove um nó em uma posição específica
    removerEm(indice) {
        if (indice < 0 || indice >= this.length)
            throw new RangeError("Índice fora dos limites")

        let remover

        if (this.length === 1) {
            // Só tem 1 elemento
            remover = this.head
            this.head = this.tail = null
        } else if (indice === 0) {
            // Remover do início
            remover = this.head
            this.head = this.head.proximo
            this.head.anterior = null
        } else if (indice === this.length - 1) {
            // Remover do fim
            remover = this.tail
            this.tail = this.tail.anterior
            this.tail.proximo = null
        } else {
            // Remover do meio
            let atual = this.head
            for (let i = 0; i < indice; i++) {
                atual = atual.proximo
            }

            remover = atual
            let { anterior, proximo } = atual

            anterior.proximo = proximo
            proximo.anterior = anterior
        }

        this.length--
    }

    // Imprime do início ao fim
    imprimirFrente() {
        let atual = this.head
        while (atual) {
            console.log(atual.valor)
            atual = atual.proximo
        }
    }

    // Imprime do fim ao início
    imprimirAtras() {
        let atual = this.tail
        while (atual) {
            console.log(atual.valor)
            atual = atual.anterior
        }
    }
}
