//Breadth First search - left to right
//https://www.youtube.com/watch?v=TxDVtNCZlSk&ab_channel=LeighHalliday
//https://www.youtube.com/watch?v=mL5vCsLR1no&ab_channel=IT_OF_WAHAM

class BFSSearch {
    BFS() {
        let currentNode = this.root;
        let queue = [];
        let result = [];
        queue.push(currentNode);

        while (queue.length) {
            currentNode = queue.shift();
            result.push(currentNode.value);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        return result;
    }
}