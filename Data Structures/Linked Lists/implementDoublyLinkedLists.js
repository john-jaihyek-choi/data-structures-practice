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


// Clean implementation of Doubly Linked List without input check (with reverse method implemented):

class Node {
    constructor(value){
      this.value = value,
      this.next = null,
      this.prev = null
    }
  }
  
  class LinkedList {
    constructor(value){
      this.head = {
        value: value,
        next: null,
        prev: null
      }
      this.tail = this.head;
      this.length = 1;
    }
  
    append(value) {
      const newItem = new Node(value);
      const oldTail = this.tail;
      this.tail.next = newItem;
      this.tail = newItem;
      this.tail.prev = oldTail;
      this.length++;
      return this.print();
    }
  
    prepend(value) {
      const newItem = new Node(value);
      newItem.next = this.head;
      this.head.prev = newItem;
      this.head = newItem;
      this.length++;
      return this.print();
    }
  
    insert(index, value) {
      const newItem = new Node(value);
      const targetNode = this.traverse(index);
      const leadNode = targetNode.next;
      leadNode.prev = newItem;
      newItem.next = leadNode;
      newItem.prev = targetNode;
      targetNode.next = newItem;
      this.length++;
      return this.print()
    }
  
    remove(index) {
      const targetNode = this.traverse(index);
      const leadNode = targetNode.next;
      targetNode.next = leadNode.next;
      this.length--;
      return this.print();
    }
  
    traverse(index) {
      let targetNode = this.head
      for(let i = 0; i < index-1; i++) {
        targetNode = targetNode.next;
      }
      return targetNode;
    }
  
    reverse() {
      let first = this.head;
      let second = this.head.next;
      this.tail = this.head;
      this.tail.next = null;
      while(second) {
        const third = second.next;
        second.next = first;
        first.prev = second;
        first = second;
        second = third;
      }
      this.head = first;
      this.head.prev = null;
      return this.print();
    }
  
    print() {
      const list = [];
      let curr = this.head;
      for(let i = 0; i < this.length; i++) {
        list.push(curr.value);
        curr = curr.next;
      }
      return list;
    }
  }
  
  const newList = new LinkedList(1);


console.log(newList.append(2));
console.log(newList.append(3));
console.log(newList.append(4));
console.log(newList.prepend(0));
console.log(newList.insert(3, 50))
console.log(newList.reverse());
console.log(newList)
