'use strict'

class BST {
  constructor () {
    this.root = null
    this.iteration = 0
  }
}

class Node {
  constructor(value, left, right) {
    this.value = value
    this.left = left
    this.right = right
  }
}

BST.prototype.insert = function (value) {
  let node = new Node(value, null, null)
  if(!this.root) {
    this.root = node
    return
  }

  let currentNode = this.root
  
  while(currentNode) {
    if(value < currentNode.value) {
      if(!currentNode.left) {
        currentNode.left = node
        break
      } else {
        currentNode = currentNode.left
      }
    } else {
      if(!currentNode.right) {
        currentNode.right = node
        break
      } else {
        currentNode = currentNode.right
      }
    }
  } 
}

BST.prototype.inOrderTraversal = function (root) {
  if(root){
    this.inOrderTraversal(root.left)
    console.log(root.value)
    this.inOrderTraversal(root.right)
  }
}

BST.prototype.preOrderTraversal = function (root) {
  if(root){
    console.log(root.value)
    this.preOrderTraversal(root.left)
    this.preOrderTraversal(root.right)
  }
}

BST.prototype.postOrderTraversal = function (root) {
  if(root){
    console.log(root.value)
    this.postOrderTraversal(root.left)
    this.postOrderTraversal(root.right)
  }
}

BST.prototype.depthFirstSearch = function (node) {
  if(node) {
    console.log(node.value)
    this.depthFirstSearch(node.left)
    this.depthFirstSearch(node.right)
  }
}

BST.prototype.breadthFirstSearch = function (node) {
  if(!this.queue) {
    this.queue = []
    this.queue.push(node)
  }

  if(node) {
    console.log(node.value)
    if (node.left) {
      this.queue.push(node.left)
    } 
    if (node.right) {
      this.queue.push(node.right)
    }
    
    this.queue.shift()
    this.breadthFirstSearch(this.queue[0])
  }
}

const bst = new BST()
bst.insert(3)
bst.insert(4)
bst.insert(1)
bst.insert(6)
bst.insert(8)
bst.insert(9)
bst.insert(13)
bst.insert(7)
// bst.inOrderTraversal(bst.root)
// bst.preOrderTraversal(bst.root)
// bst.postOrderTraversal(bst.root)
// bst.depthFirstSearch(bst.root)
// bst.breadthFirstSearch(bst.root)