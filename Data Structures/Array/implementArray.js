class myArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    
    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
      const deleted = this.data[this.length-1];
      delete this.data[this.length-1];
      this.length--;
      return deleted;
    }

    delete(index) {
      const deleted = this.data[index];
      this.shiftItems(index);
      this.length--;
      return deleted;
    }

    shiftItems(startIndex) {
      for(let i = startIndex; i < this.length - 1; i++) {
        this.data[i] = this.data[i+1];
      }
      delete this.data[this.length - 1];
    }
}

const newArray = new myArray();
newArray.push('hi');
newArray.push('you');
newArray.pop();
newArray.delete(0);
console.log(newArray);