// LIFO/FILO
// Can be implmented with Arrays and Linked Lists

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class myStack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }
    
    push(value) {
        const newItem = new Node(value);
        if(!this.top) {
            this.bottom = newItem;
            this.top = this.bottom;
        } else {
            const temp = this.top;
            this.top = newItem;
            this.top.next = temp;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.top) return null;
        if(this.length === 1) this.bottom = null;
        this.top = this.top.next;
        this.length--;
        return this;
    }
}


const newStack = new myStack();

console.log(newStack.peek());
console.log(newStack.push(1));
console.log(newStack.peek());