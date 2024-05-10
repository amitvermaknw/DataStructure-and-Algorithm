//Queue implementation with two stack
class Queue {
    constructor () {
        this.stack1 = [];
        this.stack2 = [];
    }

    /**
     * @param {number} x
     */
    enqueue(x) {
        //code here
        if (x) {
            this.stack1.push(x);
        }

    }

    /**
     * @return {number}
     */
    dequeue() {
        //code here
        if (this.stack2.length === 0) {
            if (this.stack1.length === 0) return 'stack1 is empty'

            while (this.stack1.length > 0) {
                let val = this.stack1.pop();
                this.stack2.push(val);
            }
        }

        return this.stack2.pop()
    }
}