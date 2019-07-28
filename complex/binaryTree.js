class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insertChild(value, side) {
        const newChild = new BinaryTree(value)
        if (side.toLowerCase() === 'left' || side.toLowerCase() === 'right') {
            this[side.toLowerCase()] = newChild;
            return newChild;
        }

        console.error("Can't insert child: Side can only be left or right.")
    }

    traverse(func = console.log) {
        func(this)

        if (this.left) {
            this.left.traverse();
        }

        if (this.right) {
            this.right.traverse();
        }
    }
  
    // left, root, right
    inOrderTraversal(func = console.log) {
    }
  
    // root, left, right
    preOrderTraversal(func = console.log) {
    }
  
    // left, right, root
    postOrderTraversal(func = console.log) {
    }
  }

  binaryTree = new BinaryTree(9);
  const left1 = binaryTree.insertChild(2, 'left');
  const left2 = left1.insertChild(4, 'left');
  const left3 = left2.insertChild(6, 'left');
  const left4 = left3.insertChild(7, 'left');
  const left5 = left4.insertChild(8, 'left');

  const right1 = binaryTree.insertChild(55, 'right');
  const right2 = right1.insertChild(33, 'right');
  const right3 = right2.insertChild(34, 'right');
  const right4 = right3.insertChild(454, 'right');

  binaryTree.traverse();


  
//   export default BinaryTree;