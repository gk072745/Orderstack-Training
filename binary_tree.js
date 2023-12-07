// single node for tree
class Node {
  constructor(data) {
    this.data = data;
    this.leftNode = null;
    this.rightNode = null;
  }
}

// binary tree constructor
class BinaryTree {
  constructor() {
    this.head = null;
  }

  // method for new node insertion
  add(data) {

    let node = new Node(data);

    if (this.head === null) this.head = node;
    else {
      let currNode = this.head;

      //condition for  lesser and equeal data
      if (data <= currNode.data) {

        currNode.leftNode
          ? this.traverseNodes(currNode.leftNode, data, node)
          : (currNode.leftNode = node);

        //condition for  greater data
      } else {

        currNode.rightNode
          ? this.traverseNodes(currNode.rightNode, data)
          : (currNode.rightNode = node);

      }
    }
  }

  //method for traversing nodes
  traverseNodes(currNode, data, newNode) {

    //condition for traversing left node
    if (data <= currNode.data) {

      currNode.leftNode
        ? this.traverseNodes(currNode.leftNode, data, newNode)
        : (currNode.leftNode = newNode);

      //condition for traversing right node
    } else {

      currNode.rightNode
        ? this.traverseNodes(node.currNode.rightNode, data, newNode)
        : (currNode.rightNode = newNode);

    }
  }
}

const bst = new BinaryTree();

bst.add(7);
bst.add(5);
bst.add(4);
bst.add(9);
bst.add(2);
bst.add(2);
bst.add(2);
bst.add(11);
bst.add(17);
bst.add(18);
bst.add(6);

console.log(bst);
