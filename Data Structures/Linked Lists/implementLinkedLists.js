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
class Node {
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
        const newNode = new Node(value);
        this.tail.next = newNode; // setting the current head.next = newNode
        this.tail = newNode; // setting a new tail to the node we made above in line 29
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if(index >= this.length) return this.append(value);
        if(index <= 0) return this.prepend(value);

        const newNode = new Node(value);
        const leadNode = this.traverse(index);
        const targetNode = leadNode.next

        newNode.next = targetNode;
        leadNode.next = newNode;

        this.length++;
        return this;
    }

    remove(index) {
        if(index == undefined) return
        if(index <= 0) {
            this.head = this.head.next;
            this.length--;
            return
        }
        if(index >= this.length) {
            this.traverse(this.length-1).next = null;
            this.length--;
            return
        }
        const leadNode = this.traverse(index);
        leadNode.next = leadNode.next.next;
        return this;
    }

    traverse(index) {
        let leadNode = this.head
        for(let i = 0; i < index - 1; i++) {
            leadNode = leadNode.next;
        }
        return leadNode;
    }

    printList() {
        const arr = [];
        let curr = this.head
        while(curr) {
            arr.push(curr.value);
            curr = curr.next;
        }
        console.log('length ', this.length, 'arr', arr);
    }
}

const newList = new LinkedList(10)


console.log(newList.append(5))
console.log(newList.append(8))
console.log(newList.prepend(1))
console.log(newList.prepend(7))
console.log(newList.insert(2,23))
console.log(newList.remove(3));
console.log(newList.printList());