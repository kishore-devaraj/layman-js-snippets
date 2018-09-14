'use strict'

class BST {
  constructor () {
    this.root = null
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


const bst = new BST()
bst.insert(3)
bst.insert(4)
bst.insert(1)
bst.insert(6)
bst.insert(8)
bst.insert(9)
bst.insert(13)
bst.insert(7)
// bst.inorderTraversal(bst.root)
// bst.preOrderTraversal(bst.root)
bst.postOrderTraversal(bst.root)