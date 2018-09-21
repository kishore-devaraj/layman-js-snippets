/**
 * To Build a AVL Tree
 * Create a Binary Tree with the list of values
 * On each insert check whether it is height balanced
 * If not Perform the AVL Insertions
 *    1. First check the root node and get the node height.
 *    2. Parse in the direction where the tree is present
 *    3. If the middle node has child only in the parsed direction, do single rotation
 *       opp to the parsed direction.
 *    4. If not double rotation with parsed direction first and vice versa second.
 *    5. Continue the process. 
 */

class AVL {
  constructor() {
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


AVL.prototype.isBST = function (node) {
  this.inOrderTraversal(node)
  // Flag to notify the BST correctness
  this.isBST = true

  // Part of bubble sort implementation - O(n)
  for (let index = 0; index < this.inOrderArray.length - 1; index++) {
    if (this.inOrderArray[index] > this.inOrderArray[index + 1]) {
      this.isBST = false
      break
    }
  }
  return this.isBST
}

AVL.prototype.isBalanced = function (node) {
  if (node) {
    let leftChildHeight
    let rightChildHeight
    if ((!node.left) && (!node.right)) return true

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

AVL.prototype.height = function (root) {
  if (!root) return 0
  let leftHeight = this.height(root.left)
  let rightHeight = this.height(root.right)
  return Math.max(leftHeight, rightHeight) + 1
}

AVL.prototype.insert = function (value) {
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

  // Check for Self Balancing
  if (!this.isBalanced(this.root)) {
    this.selfBalance(this.root)
  }
}

AVL.prototype.selfBalance = function (node) {
  if (node) {
    let leftChildHeight = this.height(node.left)
    let rightChildHeight = this.height(node.right)
    let currentParsingDirection = leftChildHeight > rightChildHeight ? 'left' : 'right'

    if (this.root !== node) {
      if (this.parsingDirection === currentParsingDirection) {
        // Single Rotation
        let singleRotationDirection = currentParsingDirection === 'right' ? 'left' : 'right'
        this.singleRotate(node, this.otherNode, singleRotationDirection)
      } else {
        // Double Rotation
        let nodeToSwapped = node[currentParsingDirection] 
        this.singleRotate(nodeToSwapped, node, this.parsingDirection)
        this.singleRotate(nodeToSwapped, this.otherNode, currentParsingDirection)

        return
      }
    } else {
      // Don't rotate the root node
      this.parsingDirection = currentParsingDirection
      this.otherNode = node
    }

    if (!this.isBalanced(this.root)) {
      if (node[currentParsingDirection]) {
        this.selfBalance(node[currentParsingDirection])
      }
    }
  }
}

AVL.prototype.singleRotate = function (node, otherNode, direction) {
  // console.log('node', node)
  // console.log('otherNode', otherNode)
  // console.log('direction', direction)
  // console.log('************************************')

  if (direction === 'left') {
    node.left = otherNode
    otherNode.right = null
  } else {
    node.right = otherNode
    otherNode.left = null
  }

  if (otherNode === this.root) {
    this.root = node
  }
}

AVL.prototype.inOrderTraversal = function (root) {
  if (root) {
    if (root === this.root) this.inOrderArray = [] 
    this.inOrderTraversal(root.left)
    console.log(root.value)
    this.inOrderArray.push(root.value)
    this.inOrderTraversal(root.right)
  }
}

AVL.prototype.preOrderTraversal = function (root) {
  if (root) {
    console.log(root.value)
    this.preOrderTraversal(root.left)
    this.preOrderTraversal(root.right)
  }
}

AVL.prototype.postOrderTraversal = function (root) {
  if (root) {
    console.log(root.value)
    this.postOrderTraversal(root.left)
    this.postOrderTraversal(root.right)
  }
}

const avl = new AVL()
avl.insert(3)
avl.insert(2)
avl.insert(4)
avl.insert(6)
avl.insert(5)
console.log(avl.isBST(avl.root))