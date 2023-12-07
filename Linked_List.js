// single node creation
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// constructor for linkedlist
class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    let node = new Node(data);

    if (this.head === null) {
      this.head = node;
    } else {
      let currNode = this.head;
      while (currNode.next) {
        currNode = currNode.next;
      }

      currNode.next = node;
    }
  }
}

const linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
console.log(linkedlist);
