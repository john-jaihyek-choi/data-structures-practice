// 10 --> 5 --> 16

// visual concept
let linkedLists = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: {}
            }
        }
    }
}

// proper way of implementing Linked Lists
class NewNode {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new NewNode(value);
        this.tail.next = newNode; // setting the current head.next = newNode
        this.tail = newNode; // setting a new tail to the node we made above in line 29
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new NewNode(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
}

const newList = new LinkedList(10)


console.log(newList.append(5))
console.log(newList.append(8))
console.log(newList.prepend(1))
console.log(newList.prepend(7))
console.log(newList);