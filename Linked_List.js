// single node creation
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// constructor for linkedlist
class LinkedList {
  #size
  #head

  constructor() {
    this.#head = null;
    this.#size = 0
  }

  //Methods

  //add
  add(data) {
    let node = new Node(data);

    //if the linkedlist is empty
    if (this.#head === null) this.#head = node;
    else {
      let currNode = this.#head;

      while (currNode.next) {
        currNode = currNode.next;
      };
      currNode.next = node;
    };

    this.#size++
    return this
  }

  //insert
  insert(data, pos) {

    //insert it start
    if (pos > this.#size || pos < 0) return console.log(`'Invalid position... {${pos}}'`)

    let node = new Node(data)
    let currNode = this.#head
    let prev = null

    if (pos === 0) [this.#head, node.next] = [node, this.#head]
    else {
      let i = 0

      while (i < pos) {
        prev = currNode
        currNode = currNode.next
        i++
      }
      //inserting at the require pos and connecting to the next node..
      [prev.next, node.next] = [node, currNode]
    }

    this.#size++
    return this
  }

  //delete
  delete(pos) {
    if (pos > this.#size - 1 || pos < 0) return console.log(`'Invalid position... {${pos}}'`)

    let currNode = this.#head
    let prev = null

    if (pos === 0) this.#head = this.#head.next
    else {
      let i = 0
      while (i < pos) {
        prev = currNode
        currNode = currNode.next
        i++
      }
      //removing at the require pos and connecting to the next node..
      prev.next = currNode.next
    }

    this.#size--
    return this
  }

  //empty
  isEmpty() {
    console.log(this.#size === 0)
    return this
  }

  //size
  get size() {
    console.log(this.#size)
    return this
  }

  //print whole list
  prindList() {
    let currNode = this.#head

    while (currNode) {
      console.log(currNode.data)
      currNode = currNode.next
    }
    return this
  }

  //print single node
  printAt(pos) {
    if (pos > this.#size - 1 || pos < 0) return console.log(`'Invalid position... {${pos}}'`)

    let i = 0;
    let currNode = this.#head
    while (i < pos) {
      currNode = currNode.next
      i++
    }
    console.log(currNode)
    return this
  }




}

const linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(3);
linkedlist.insert(2, 1);
linkedlist.add(5);
linkedlist.insert(4, 3);

linkedlist.prindList()
console.log("size: ", linkedlist.size);
linkedlist.printAt(4)