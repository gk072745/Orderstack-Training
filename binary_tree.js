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
    const node = new Node(data)
    const currNode = this.head

    if (this.head == null) this.head = node
    else this.traverseNodes(node, currNode)
    return this.head
  }

  //recursive function for inserting element
  traverseNodes(node, currNode) {
    const { data } = node


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



  // search single node
  searchNode(data, currNode = this.head) {
    if (currNode === null || data === currNode.data) return currNode
    return data < currNode.data ? this.searchNode(data, currNode.leftNode) : this.searchNode(data, currNode.rightNode)
  }

  //traversal tree methods

  // 1. Inorder Traversal
  inorderTraversal(currNode = this.head) {
    if (currNode === null) return

    this.inorderTraversal(currNode.leftNode)
    console.log(currNode.data)
    this.inorderTraversal(currNode.rightNode)
  }

  // 2. preorder Traversal
  preorderTraversal(currNode = this.head) {
    if (currNode === null) return

    console.log(currNode.data)
    this.preorderTraversal(currNode.leftNode)
    this.preorderTraversal(currNode.rightNode)
  }

  // 3. postorder Traversal
  postorderTraversal(currNode = this.head) {
    if (currNode === null) return

    this.postorderTraversal(currNode.leftNode)
    this.postorderTraversal(currNode.rightNode)
    console.log(currNode.data)

  }

  // delete single node
  deleteNode(data, currNode = this.head) {
    if (currNode === null || data === undefined) return

    const searchedNode = currNode
    while (currNode.leftNode || currNode.rightNode) {

    }



  }

}

const bst = new BinaryTree();

bst.insert(7);
bst.insert(4);
bst.insert(5);
bst.insert(9);
bst.insert(2);
bst.insert(3);
bst.insert(2);
bst.insert(11);
bst.insert(17);
bst.insert(16);
bst.insert(6);

bst.deleteNode(2)
bst.inorderTraversal()