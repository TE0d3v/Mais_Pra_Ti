class Node {
    constructor(valor) {
        this.valor = valor
        this.anterior = null
        this.proximo = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    inserirInicio(v) {
        let novo = new Node(v)
        novo.proximo = this.head
        if (this.head) {
            this.head.anterior = novo
        }
        this.head = novo
    }

    inserirFim(v) {
        let novo = new Node(v)

        if (!this.head) {
            this.head = novo;
            this.tail = novo;
        } else {
            this.tail.proximo = novo;
            novo.anterior = this.tail;
            this.tail = novo;
        }

    }
}