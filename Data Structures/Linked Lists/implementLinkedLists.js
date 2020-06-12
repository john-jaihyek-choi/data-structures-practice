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
        this.head.next = {
            value: value,
            next: null
        }
        this.tail = this.head.next
        this.length++;
    }
}

const newList = new LinkedList(10)


console.log(newList.append(5))
console.log(newList);