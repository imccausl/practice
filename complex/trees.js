class Tree {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    insertChild(value) {
      const newTree = new Tree(value);
      this.children.push(newTree);
  
      return newTree;
    }
  
    removeChild(value) {
      const newChildren = this.children.filter(
        node => node.value === value && !node.children.length
      );
  
      this.children = newChildren;
    }
  
    // Uses a Depth-First Traversal
    static traverse(tree, func = console.log) {}
  
    contains(searchValue) {}
  
    static size(tree) {}
  
    static find(tree, value) {}
  
    insert(parentTree, value) {}
  
    remove(value) {}
  
    reorder(node1, node2) {}
  }
  
  export default Tree;
  