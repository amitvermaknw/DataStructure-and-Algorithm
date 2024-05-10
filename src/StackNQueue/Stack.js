class Stack {
    constructor () {
        this.item = [];
    }

    add(element) {
        return this.item.push(element)
    }

    remove() {
        if (this.item.length > 0) {
            return this.item.pop();
        }
    }

    //View the last element
    peek() {
        return this.item[this.item.length - 1]
    }

    isEmpty() {
        return this.item.length === 0
    }

    size() {
        return this.item.length;
    }

    clear() {
        this.item = [];
    }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
console.log(stack.items);

stack.remove();
console.log(stack.items);

console.log(stack.peek());

console.log(stack.isEmpty());

console.log(stack.size());

stack.clear();
console.log(stack.items);
