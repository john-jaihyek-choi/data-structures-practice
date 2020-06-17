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

    reverse() {
        if(!this.head.next) return this.head;
        this.tail = this.head; // flip tail to head
        let first = this.head; // store head as the first value (if provided [10,5,6,7]) first will be 10
        let second = first.next; // store head.next as the second value (second will be 5)
        while(second) {
          const third = second.next; // store head.next.next as a third value (third will be 6)
          second.next = first;  // set third to the first value (setting 5.next to 10 this will make [10 <- 5 <- 6 -> 7])
          first = second; // set first to second (moving first value to 5 from 10)
          second = third; // set second to a new third value (moving second value to 6 from 5)
        }
        this.head.next = null;
        this.head = first;
        return this.printList();
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

// Clean implementation of Linked List without input check:

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
      this.tail.next = newItem;
      this.tail = newItem;
      this.length++;
      return this.print();
    }
  
    prepend(value) {
      const newItem = new Node(value);
      newItem.next = this.head;
      this.head = newItem;
      this.length++;
      return this.print();
    }
  
    insert(index, value) {
      const newItem = new Node(value);
      const targetNode = this.traverse(index);
      const leadNode = targetNode.next;
      newItem.next = leadNode;
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
      while(second) {
        const third = second.next;
        second.next = first;
        first = second;
        second = third;
      }
      this.head = first;
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
  
  
  console.log(newList.append(2))
  console.log(newList.prepend(0))
  console.log(newList.insert(1,8))
  console.log(newList.insert(3,19))
  console.log(newList.remove(1))
  console.log(newList.reverse());
  console.log(newList);