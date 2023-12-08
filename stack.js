class Node {
    constructor(data) {
        this.data = data;
        this.next = null;

    }
}

// constructor for linkedlist
class Stack {

    constructor() {
        this.head = null;
        this.size = 0
    }

    //Inserting elements in the Stack 
    push(ele) {
        let node = new Node(ele)
        node.next = this.head
        this.head = node
        return this.head
    }

    //Removing elements from the Stack
    pop() {
        if (this.head === null) return "Underflow: Stack is empty!!!";

        let poppedEle = this.head.data
        this.head = this.head.next

        return poppedEle
    }

    //Getting peak element in the Stack
    top() {
        return this.head.data
    }

    //Checking if empty or not
    isEmpty() {
        return this.head === null
    }


}

const stack1 = new Stack(3);

stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);

stack1.pop()
console.log(stack1.isEmpty())

console.log(stack1.pop())
console.log(stack1.pop())
console.log(stack1.pop())
console.log(stack1.isEmpty())

