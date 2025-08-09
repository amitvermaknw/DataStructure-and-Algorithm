/**
 * DFS 
 * 
 */

//preorder (Root-> Left-> Right)


function preorder(node) {
    if (!node) return

    console.log(node.val)
    preorder(node.left)
    preorder(node.right)
}


//inorder (Left -> Root-> Right)

function inorder(node) {
    if (!node) return

    preorder(node.left)
    console.log(node.val)
    preorder(node.right)
}

//postorder (Left -> Right -> Node)

function postOder(node) {
    if (!node) reuturn

    preorder(node.left)
    preorder(node.right)
    console.log(node.val)
}