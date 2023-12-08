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

  // methods
  // interting ele. in the binary tree...
  insert(data) {
    const node = new Node(data);
    const currNode = this.head;

    if (this.head == null) this.head = node;
    else this.traverseNodes(node, currNode);
    return this.head;
  }

  //recursive function for inserting element.............
  traverseNodes(node, currNode) {
    const { data } = node;

    //condition for traversing left node
    if (data <= currNode.data) {
      currNode.leftNode
        ? this.traverseNodes(node, currNode.leftNode)
        : (currNode.leftNode = node);

      //condition for traversing right node
    } else {
      currNode.rightNode
        ? this.traverseNodes(node, currNode.rightNode)
        : (currNode.rightNode = node);
    }
  }

  // search single node...............
  searchNode(data, currNode = this.head) {
    if (currNode === null || data === currNode.data) return currNode;
    return data < currNode.data
      ? this.searchNode(data, currNode.leftNode)
      : this.searchNode(data, currNode.rightNode);
  }

  //traversal tree methods

  // 1. Inorder Traversal............
  inorderTraversal(currNode = this.head) {
    if (currNode === null) return;

    this.inorderTraversal(currNode.leftNode);
    console.log(currNode.data);
    this.inorderTraversal(currNode.rightNode);
  }

  // 2. preorder Traversal................
  preorderTraversal(currNode = this.head) {
    if (currNode === null) return;

    console.log(currNode.data);
    this.preorderTraversal(currNode.leftNode);
    this.preorderTraversal(currNode.rightNode);
  }

  // 3. postorder Traversal................
  postorderTraversal(currNode = this.head) {
    if (currNode === null) return;

    this.postorderTraversal(currNode.leftNode);
    this.postorderTraversal(currNode.rightNode);
    console.log(currNode.data);
  }

  // delete single node................
  deleteNode(data) {
    if (this.head === null) return this.head;

    let prevNode = null;
    let currNode = this.head;

    // deleting head node..........
    if (currNode.data === data) {
      if (currNode.leftNode && currNode.rightNode) {
        let rightNode = currNode.rightNode;
        this.head = currNode.leftNode;
        currNode = currNode.leftNode;
        while (currNode.rightNode) {
          currNode = currNode.rightNode;
        }
        currNode.rightNode = rightNode;
      } else if (!currNode.leftNode && !currNode.rightNode) {
        this.head = null;
      } else if (currNode.leftNode) {
        this.head = this.head.leftNode;
      } else {
        this.head = this.head.rightNode;
      }
      return this.head;
    }

    //  finding node that needs to delete......
    while (currNode.leftNode || currNode.rightNode) {
      if (data < currNode.data) {
        prevNode = currNode;
        currNode = currNode.leftNode;
      }
      else if (currNode.data === data) break;
      else (prevNode = currNode), (currNode = currNode.rightNode);
    }

    if (currNode.data !== data) return "Invalid node!";

    if (currNode.leftNode === null && currNode.rightNode === null) {
      prevNode.rightNode = prevNode.leftNode = null;
    } else if (currNode.leftNode && currNode.rightNode) {
      let leastRightChild = currNode.rightNode;
      let prevLeastRightChild = currNode;

      while (leastRightChild.leftNode) {
        prevLeastRightChild = leastRightChild;
        leastRightChild = leastRightChild.leftNode;
      }

      if (currNode === prevLeastRightChild) {
        currNode.data = leastRightChild.data;
        currNode.rightNode = null;
      } else {
        currNode.data = leastRightChild.data;
        prevLeastRightChild.leftNode = leastRightChild.rightNode;
      }
    } else if (currNode.leftNode) {
      prevNode.leftNode === currNode
        ? (prevNode.leftNode = currNode.leftNode)
        : (prevNode.rightNode = currNode.leftNode);
    } else {
      prevNode.rightNode === currNode
        ? (prevNode.rightNode = currNode.rightNode)
        : (prevNode.leftNode = currNode.rightNode);
    }
    return this.head;
  }
}

const bst = new BinaryTree();

bst.insert(6);
bst.insert(3);
bst.insert(2);
bst.insert(4);
bst.insert(1);
bst.insert(5);
bst.insert(2);
bst.insert(7);
bst.insert(9);
bst.insert(8);
bst.insert(10);

bst.deleteNode(1);
bst.inorderTraversal();
