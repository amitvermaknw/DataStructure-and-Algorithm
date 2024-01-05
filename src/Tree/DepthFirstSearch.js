//Depth first search
//PreOrder - https://www.youtube.com/watch?v=T5Dgr1Ds00A&ab_channel=IT_OF_WAHAM
//https://www.youtube.com/watch?v=8ycDb59RECk&ab_channel=IT_OF_WAHAM
//Always travel left first then go to right for travel.

class DFSSearch {
    DFSPreOrder() {
        let result = [];
        function traverse(currentNode) {
            result.push(currentNode);
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.right) traverse(currentNode.right);
        }

        traverse(this.root);
        return result;
    }

    DFSPostOrder() {
        let result = [];
        function traverse(currentNode) {
            if (currentNode.left) traverse(currentNode.left);
            if (currentNode.right) traverse(currentNode.right);
            result.push(currentNode);
        }

        traverse(this.root);
        return result;
    }
}