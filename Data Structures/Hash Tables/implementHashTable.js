class HashTable {
    constructor(size) {
      this.data = new Array(size);
    }
  
    _hash(key){ // _ in the beginning means its a private method (Does not mean you CANT access, but its not the right practice)
      let hash = 0;
      for(let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
    }
  
    set(key, value) { // O(1)
      const hashKey = this._hash(key)
      if(!this.data[hashKey]) {
        this.data[hashKey] = [];
      }
      this.data[hashKey].push([ key, value ]);
      return this.data;
    }
  
    get(key) { // O(1) **can be O(n) depending on memory allocation size causing collision, but mostly O(1)
      const hashKey = this._hash(key);
      const currentHash = this.data[hashKey];
      if(this.data[hashKey]) {
        for(let i = 0; i < currentHash.length; i++) {
          if(currentHash[i][0] === key) return currentHash[i][1];
        }
      }
    }

    keys() {
        const keys = [];
        for(let i = 0; i < this.data.length; i++) { // O(n)
            if(this.data[i]) {
                keys.push(this.data[i][0][0])

                if(this.data[i].length > 1) { // O(n^2)
                    for(let j = 1; j < this.data[i].length; j++) {
                        keys.push(this.data[i][j][0]);
                    }
                }
            }
        }
        return keys;
    }
  
  }
  
  const newHash = new HashTable(10);
  console.log(newHash);
  console.log(newHash.set('grape', 1000));
  console.log(newHash.set('apple', 1000));
  console.log(newHash);
  console.log(newHash.get('apple'))
  console.log(newHash.keys());
  