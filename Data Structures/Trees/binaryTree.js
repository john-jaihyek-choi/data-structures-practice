class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(value){
      const newNode = new Node(value);

      if(!this.root) {
          this.root = newNode
      } else {
          let currentNode = this.root;
          while(currentNode) {
              if(value < currentNode.value) {
                  if(!currentNode.left) {
                    return currentNode.left = newNode;
                  }
                  currentNode = currentNode.left;
              } else {
                  if(!currentNode.right) {
                    return currentNode.right = newNode;
                  }
                  currentNode = currentNode.right
              };
          }
      }
    }
    lookup(value){
      let currentNode = this.root;
      while(currentNode) {
        if(currentNode.value === value) return currentNode;
        if(value < currentNode.value) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
      return null;
    }
    remove(value) {
      
    }
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(20)
  tree.insert(1);
  JSON.stringify(traverse(tree.root))
  
  
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  
  
  
  
  
  