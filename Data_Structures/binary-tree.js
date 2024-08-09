/* 
Cada nodo de una estructura de datos de árbol binario debe tener las siguientes propiedades:

*key:La clave del nodo
*value:El valor del nodo
*parent:El padre del nodo ( nullsi no hay ninguno)
*left:Un puntero al hijo izquierdo del nodo ( nullsi no hay ninguno)
*right:Un puntero al hijo derecho del nodo ( nullsi no hay ninguno)

Las principales operaciones de una estructura de datos de árbol binario son:

*insert: Inserta un nodo como hijo del nodo padre indicado
*remove:Elimina un nodo y sus hijos del árbol binario
*find:Recupera un nodo determinado
*preOrderTraversal:Recorre el árbol binario recorriendo recursivamente cada nodo seguido de sus hijos.
*postOrderTraversal:Recorre el árbol binario recorriendo recursivamente los hijos de cada nodo seguido del nodo
*inOrderTraversal:Recorre el árbol binario recorriendo recursivamente el hijo izquierdo de cada nodo, seguido por el nodo, 
seguido por su hijo derecho.
*/

class BinaryTreeNode {
    constructor(key, value = key, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    get isLeaf(){
        return this.left === null && this.right === null;
    }

    get hasChildren(){
        return !this.isLeaf;
    }
}

class BinaryTree {
    constructor(key, value = key) {
        this.root = new BinaryTreeNode(key, value);
    }

    *inOrderTraversal(node = this.root) {
        if(node.left) yield* this.inOrderTraversal(node.left);
        yield node;
        if(node.right) yield* this.inOrderTraversal(node.right);
    }

    *postOrderTraversal(node = this.root) {
        if(node.left) yield* this.postOrderTraversal(node.left);
        if(node.right) yield* this.postOrderTraversal(node.right);
        yield node;
    }

    *preOrderTraversal(node = this.root) {
        yield node;
        if(node.left) yield* this.preOrderTraversal(node.left);
        if(node.right) yield* this.preOrderTraversal(node.right);
    }

    insert(
        parentNodeKey,
        key,
        value = key,
        { left, right } = {left: true, right: true}
    ) {
        for(let node of this.preOrderTraversal()) {
            if(node.key === parentNodeKey) {
                const canInsertLeft = left && node.left === null;
                const canInsertRight = right && node.right === null; 
                if(!canInsertLeft && !canInsertRight) return false;
                if(canInsertLeft) {
                    node.left = new BinaryTreeNode(key, value, node);
                    return true;
                }
                if(canInsertRight) {
                    node.right = new BinaryTreeNode(key, value, node);
                    return true;
                }
            }            
        }
        return false;
    }

    remove(key){
        for(let node of this.preOrderTraversal()){
            if(node.left.key === key){
                node.left = null;
                return true;
            }
            if(node.right.key === key){
                node.right = null;
                return true;
            }
        }
        return false;
    }

    find(key){
        for(let node of this.preOrderTraversal()){
            if (node.key === key) return node;
        }
        return undefined;
    }
}

const tree = new BinaryTree(1, 'AB');

tree.insert(1, 11, 'AC');
tree.insert(1, 12, 'BC');
tree.insert(12, 121, 'BG', {right: true});

[...tree.preOrderTraversal()].map(node => node.value); // ['AB', 'AC', 'BC', 'BG']


class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BTS{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        } 
        let current = this.root;

        while(true){
            if(value === current.value) return undefined;
            if(value < value.current){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(value){
        if(this.root === null) return false;
        let current = this.root;
        found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
} 