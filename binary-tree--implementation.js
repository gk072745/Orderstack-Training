class Node {
  constructor(data) {
    this.data = data;
    this.leftNode = null;
    this.rightNode = null;
  }
}

class BinaryTree {
  constructor() {
    this.head = null;
  }

  add(data) {
    let node = new Node(data);

    if (this.head === null) this.head = node;
    else {
      let currNode = this.head;

      if (data <= currNode.data) {
        currNode.leftNode
          ? this.traverseNodes(currNode.leftNode, data, node)
          : (currNode.leftNode = node);
      } else {
        currNode.rightNode
          ? this.traverseNodes(currNode.rightNode, data)
          : (currNode.rightNode = node);
      }
    }
  }

  traverseNodes(currNode, data, newNode) {
    if (data <= currNode.data) {
      currNode.leftNode
        ? this.traverseNodes(currNode.leftNode, data, newNode)
        : (currNode.leftNode = newNode);
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
