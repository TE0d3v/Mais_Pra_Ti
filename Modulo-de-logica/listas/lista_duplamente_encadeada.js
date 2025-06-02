/**
 * Classe que representa um nó da lista duplamente encadeada.
 * Cada nó armazena um valor e possui ponteiros para o nó anterior e próximo.
 */
class Node {
    constructor(valor) {
        this.valor = valor;          // Valor armazenado no nó
        this.anterior = null;       // Referência para o nó anterior (null se for o primeiro)
        this.proximo = null;        // Referência para o próximo nó (null se for o último)
    }
}

/**
 * Classe que implementa uma lista duplamente encadeada.
 * Possui referências para o primeiro (head) e último (tail) nós,
 * além de manter o controle do tamanho da lista.
 */
class DoublyLinkedList {
    constructor() {
        this.head = null;            // Primeiro nó da lista
        this.tail = null;            // Último nó da lista
        this.length = 0;             // Quantidade de nós na lista
    }

    /**
     * Insere um novo nó no início da lista.
     * @param {*} valor - Valor a ser inserido
     */
    inserirInicio(valor) {
        const novoNo = new Node(valor);
        
        if (!this.head) {
            // Lista vazia: novo nó será head e tail
            this.head = this.tail = novoNo;
        } else {
            // 1. Novo nó aponta para o head atual
            novoNo.proximo = this.head;
            // 2. Head atual aponta de volta para o novo nó
            this.head.anterior = novoNo;
            // 3. Novo nó se torna o novo head
            this.head = novoNo;
        }

        this.length++;
    }

    /**
     * Insere um novo nó no final da lista.
     * @param {*} valor - Valor a ser inserido
     */
    inserirFim(valor) {
        const novoNo = new Node(valor);
        
        if (!this.head) {
            // Lista vazia: novo nó será head e tail
            this.head = this.tail = novoNo;
        } else {
            // 1. Tail atual aponta para o novo nó
            this.tail.proximo = novoNo;
            // 2. Novo nó aponta de volta para o tail atual
            novoNo.anterior = this.tail;
            // 3. Novo nó se torna o novo tail
            this.tail = novoNo;
        }

        this.length++;
    }

    /**
     * Insere um novo nó em uma posição específica.
     * @param {number} indice - Posição de inserção (0-based)
     * @param {*} valor - Valor a ser inserido
     * @throws {RangeError} Se o índice for inválido
     */
    inserirEm(indice, valor) {
        // Validação do índice
        if (indice < 0 || indice > this.length) {
            throw new RangeError("Índice fora dos limites");
        }

        // Casos especiais para otimização
        if (indice === 0) return this.inserirInicio(valor);
        if (indice === this.length) return this.inserirFim(valor);

        // Encontra o nó na posição desejada
        let atual = this.head;
        for (let i = 0; i < indice; i++) {
            atual = atual.proximo;
        }

        const novoNo = new Node(valor);
        const noAnterior = atual.anterior;

        // Reconecta os ponteiros:
        // 1. Nó anterior -> novo nó
        noAnterior.proximo = novoNo;
        // 2. Novo nó -> nó anterior
        novoNo.anterior = noAnterior;
        // 3. Novo nó -> nó atual
        novoNo.proximo = atual;
        // 4. Nó atual -> novo nó
        atual.anterior = novoNo;

        this.length++;
    }

    /**
     * Remove o nó em uma posição específica.
     * @param {number} indice - Posição do nó a ser removido (0-based)
     * @throws {RangeError} Se o índice for inválido
     */
    removerEm(indice) {
        // Validação do índice
        if (indice < 0 || indice >= this.length) {
            throw new RangeError("Índice fora dos limites");
        }

        let noRemovido;

        // Casos especiais para otimização
        if (this.length === 1) {
            // Único nó da lista
            noRemovido = this.head;
            this.head = this.tail = null;
        } else if (indice === 0) {
            // Remove do início
            noRemovido = this.head;
            this.head = this.head.proximo;
            this.head.anterior = null;
        } else if (indice === this.length - 1) {
            // Remove do fim
            noRemovido = this.tail;
            this.tail = this.tail.anterior;
            this.tail.proximo = null;
        } else {
            // Remove do meio
            let atual = this.head;
            for (let i = 0; i < indice; i++) {
                atual = atual.proximo;
            }

            noRemovido = atual;
            const { anterior, proximo } = atual;

            // Reconecta os nós vizinhos
            anterior.proximo = proximo;
            proximo.anterior = anterior;
        }

        this.length--;
        return noRemovido.valor;  // Retorna o valor do nó removido
    }

    /**
     * Imprime os valores da lista do início ao fim.
     */
    imprimirFrente() {
        let atual = this.head;
        while (atual) {
            console.log(atual.valor);
            atual = atual.proximo;
        }
    }

    /**
     * Imprime os valores da lista do fim ao início.
     */
    imprimirAtras() {
        let atual = this.tail;
        while (atual) {
            console.log(atual.valor);
            atual = atual.anterior;
        }
    }
}

const lista = new DoublyLinkedList();
lista.inserirFim(10);
lista.inserirInicio(5);
lista.inserirEm(1, 7);
lista.imprimirFrente();  // 5, 7, 10
// lista.removerEm(1);
// lista.imprimirAtras();   // 10, 5