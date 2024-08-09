class Queue {
    constructor(){
        this.items = [];
        this.frontIndex = 0;
        this.backIndex = 0;
    }

    enqueue(element){
        this.items[this.backIndex] = element;
        this.backIndex++;
        return element + " added to the queue"; 
    }

    dequeue(){
        if (this.frontIndex === this.backIndex){
            return "Underflow";
        }
        const element = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return element + " removed from the queue";
    }

    peek(){
        return this.items[this.frontIndex];
    }

    get printQueue(){
        return this.items;
    }
}

const queue = new Queue();

console.log(queue.enqueue(1)); // 1 added to the queue
console.log(queue.enqueue(2)); // 2 added to the queue
console.log(queue.enqueue(3)); // 3 added to the queue
console.log(queue.dequeue()); // 1 removed from the queue
console.log(queue.peek()); // 2
let str = queue.printQueue; 
console.log(str); //[2,3]
