'use strict'

class BST {
  constructor() {
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
  if (!this.root) {
    this.root = node
    return
  }

  let currentNode = this.root

  while (currentNode) {
    if (value < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = node
        break
      } else {
        currentNode = currentNode.left
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = node
        break
      } else {
        currentNode = currentNode.right
      }
    }
  }
}

BST.prototype.inOrderTraversal = function (root) {
  if (root) {
    if (root === this.root) this.inOrderArray = [] 
    this.inOrderTraversal(root.left)
    console.log(root.value)
    this.inOrderArray.push(root.value)
    this.inOrderTraversal(root.right)
  }
}

BST.prototype.preOrderTraversal = function (root) {
  if (root) {
    console.log(root.value)
    this.preOrderTraversal(root.left)
    this.preOrderTraversal(root.right)
  }
}

BST.prototype.postOrderTraversal = function (root) {
  if (root) {
    console.log(root.value)
    this.postOrderTraversal(root.left)
    this.postOrderTraversal(root.right)
  }
}

BST.prototype.depthFirstSearch = function (node) {
  if (node) {
    console.log(node.value)
    this.depthFirstSearch(node.left)
    this.depthFirstSearch(node.right)
  }
}

BST.prototype.breadthFirstSearch = function (node) {
  if (!this.queue) {
    this.queue = []
    this.queue.push(node)
  }

  if (node) {
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

BST.prototype.max = function (root) {
  if (root) {
    if (root.right) {
      return this.max(root.right)
    } else {
      return root.value
    }
  }
}

BST.prototype.min = function (root) {
  if (root) {
    if (root.left) {
      return this.min(root.left)
    } else {
      return root.value
    }
  }
}

BST.prototype.height = function (root) {
  if (!root) return 0
  let leftHeight = this.height(root.left)
  let rightHeight = this.height(root.right)
  return Math.max(leftHeight, rightHeight) + 1
}

BST.prototype.depth = function (node, value) {
  if (node) {
    if (node === this.root) this.depthValue = 0
    else this.depthValue += 1
    if (node.value === value) return this.depthValue  
    if (node.value > value) {
      return this.depth(node.left, value)
    } else {
      return this.depth(node.right, value)
    }
  }
}

BST.prototype.search = function (node, value) {
  if (node) {
    if (node.value === value) {
      return true
    }
    if (node.value > value) {
      return this.search(node.left, value)
    } else {
      return this.search(node.right, value)
    }
  }
  return false
}

BST.prototype.isBST = function (node) {
  this.inOrderTraversal(node)
  // Flag to notify the BST correctness
  this.isBST = true
      
  // Part of bubble sort implementation - O(n)
  for (let index = 0; index < this.inOrderArray.length - 1; index++) {
    if (this.inOrderArray[index] > this.inOrderArray[index+1]) {
      this.isBST = false
      break
    }
  }
  return this.isBST
}

BST.prototype.isBalanced = function (node) {
  if(node) {
    let leftChildHeight
    let rightChildHeight
    if((!node.left) && (!node.right)) return true
    
    leftChildHeight = this.height(node.left)
    rightChildHeight = this.height(node.right)

    if (Math.abs(leftChildHeight - rightChildHeight) > 1) {
      return false
    } else {
      return this.isBalanced(node.left) && this.isBalanced(node.right)
    }
  }
  return true
}

const bst = new BST()
bst.insert(2)
bst.insert(1)
bst.insert(5)
bst.insert(4)
bst.insert(3)
bst.insert(9)
bst.insert(13)
bst.insert(7)
// bst.inOrderTraversal(bst.root)
// bst.preOrderTraversal(bst.root)
// bst.postOrderTraversal(bst.root)
// bst.depthFirstSearch(bst.root)
// bst.breadthFirstSearch(bst.root)
// console.log(bst.max(bst.root))
// console.log(bst.min(bst.root))
// console.log(bst.height(bst.root))
// console.log(bst.depth(bst.root, 9))
// console.log(bst.search(bst.root, 11))
// console.log(bst.isBST(bst.root))
console.log(bst.isBalanced(bst.root))
