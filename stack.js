class Stack {
    //private props
    #length
    #data
    #maxSize

    constructor(size) {
        this.#length = 0;
        this.#data = {}
        size > 0 && (this.#maxSize = size)
    }

    //Inserting elements in the Stack 
    push(ele) {
        if (this.#maxSize <= this.#length) return "Overflow: Stack is full!!!"
        this.#data[this.#length++] = ele;
        return this;
    }

    //Removing elements from the Stack
    pop() {
        if (this.#length === 0) return "Underflow: Stack is empty!!!";

        return this.#data[--this.#length]
    }

    //Getting peak element in the Stack
    top() {
        return this.#length === 0 ? "Empty Stack!" : this.#data[this.#length - 1];
    }

    //Checking if empty or not
    isEmpty() {
        return this.#length === 0
    }

    //Checking size of the Stack
    get size() {
        return this.#length
    }


}

const stack1 = new Stack(3);

stack1.push(1);
stack1.push(2);
stack1.push(3);

console.log(stack1.push(4))

console.log(stack1.top())
console.log(stack1.pop())

console.log(stack1.isEmpty())
console.log(stack1.size)

console.log(stack1.pop())
console.log(stack1.pop())

console.log(stack1.pop())

console.log(stack1.isEmpty())
console.log(stack1.size)

