class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode; // setting the current head.next = newNode
        this.tail = newNode; 
        this.length++;
        return this.printList();
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
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

        newNode.prev = leadNode;
        targetNode.prev = newNode;

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
        leadNode.next.prev = leadNode;
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