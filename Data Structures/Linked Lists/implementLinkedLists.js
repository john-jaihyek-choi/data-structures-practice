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
        if(!this.tail) this.tail = newNode;
        this.tail.next = newNode; // setting the current head.next = newNode
        this.tail = newNode; // setting a new tail to the node we made above in line 29
        this.length++;
        return this.printList();
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this.printList();
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
        return this.printList();
    }

    remove(index) {
        if(this.length <= 1) return console.log("There are no valid tails");
        if(index === undefined) return;
        if(index <= 0) {
            this.head = this.head.next;
            this.length--;
            return
        }
        if(index >= this.length) {
            this.remove(this.length-1);
            return
        }
        const leadNode = this.traverse(index);
        const deleteNode = leadNode.next
        leadNode.next = deleteNode.next;
        this.tail = this.traverse(this.length-1);
        this.length--;
        return this.printList();
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
        console.log('length ', this.length, 'arr', arr, 'node', this);
    }
}

const newList = new LinkedList(10)

