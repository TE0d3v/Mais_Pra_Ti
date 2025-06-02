class Node {
    constructor(valor) {
        this.valor = valor;          // Valor armazenado no nó
        this.proximo = null;        // Referência para o próximo nó (null se for o último)
    }
}

class Queue {
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }

    enqueue(valor){
        let newNode = new Node(v)
        if(this.rear){
            this.rear.proximo = newNode
        }

        this.rear = newNode
        if(!this.front){
            this.front = newNode
        }

        this.size++
    }

    dequeue(){
        if(this.isEmpty()){
            return "Underflow Fila Vazia"
        }
    }

    isEmpty(){
        return this.size === 0
    }
}