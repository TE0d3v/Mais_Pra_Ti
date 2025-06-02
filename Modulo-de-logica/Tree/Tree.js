class TreeNode {
    constructor(value) {  // Corrigido: 'construtor' -> 'constructor'
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }

    removeChild(value) {
        this.children = this.children.filter(child => child.value !== value);
    }
}

class Tree {
    constructor(rootValue) {  // Corrigido: 'construtor' -> 'constructor'
        this.root = new TreeNode(rootValue);
    }

    // Método DFS (Depth-First Search)
    traverseDFS(callback, depth = 0) {
        function recurse(node, depth) {
            callback(node, depth);
            node.children.forEach(child => recurse(child, depth + 1));
        }
        recurse(this.root, 0);
    }
}

// Função para imprimir os nós (adicionada)
function printNode(node, depth) {
    const indent = " ".repeat(depth * 3);
    const arrow = depth > 0 ? "└──" : "";
    console.log(`${indent}${arrow} ${node.value}`);
}

// Criando a árvore
const tree = new Tree("A");

// Criando os nós
const B = new TreeNode("B");
const C = new TreeNode("C");
const D = new TreeNode("D");
const E = new TreeNode("E");
const F = new TreeNode("F");
const G = new TreeNode("G");
const H = new TreeNode("H");

// Montando a árvore
tree.root.addChild(B);
tree.root.addChild(C);
tree.root.addChild(D);

B.addChild(E);
B.addChild(F);

C.addChild(G);

F.addChild(H);

console.log("----------- Busca em Profundidade -----------");
tree.traverseDFS(printNode);