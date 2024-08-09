//using an array to implement a stack

/* const myStack = [];

myStack.push(1);
myStack.push(2);

console.log(myStack);//[1,2]

myStack.pop();
console.log(myStack);//[1] */

class Stack {
    constructor(){
        this.items = [];
    }

    //Add a number to the top of the stack
    push(element){
        this.items.push(element);
    }

    //Take the top number off the stack

    pop(){
        if (this.items.length === 0){
            return "Underflow";
        }
        return this.items.pop();
    }

    //See what the top number  is

    peek(){
        return this.items[this.items.length - 1];
    }

    //Check if the stack is empty

    isEmpty(){
        return this.items.length === 0;
    }

    //Find out how many numbers are in the stack
    size(){
        return this.items.length;
    }
}

//Using the stack class

let myStack = new Stack();
myStack.push(1);
myStack.push(2);

console.log(myStack.peek());//2
myStack.pop();
console.log(myStack.peek());//1