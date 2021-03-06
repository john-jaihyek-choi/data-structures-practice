// FIFO / LILO
// Only use Linked Lists for the best practices;

class Node {
    constructor(value) {
        this.value = value;
        this.next = null; // next = the next one in line NOT the one infront of the current node
    }
}

class myQueue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newItem = new Node(value);
        if(!this.first) {
            this.last = newItem;
            this.first = this.last;
        } else {
            this.last.next = newItem;
            this.last = newItem;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if(!this.first) return null;
        if(this.length === 1) this.last = null;
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

const newQueue = new myQueue();

console.log(newQueue.peek());
console.log(newQueue.enqueue('person1'));
console.log(newQueue.enqueue('person2'));
console.log(newQueue.enqueue('person3'));
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());