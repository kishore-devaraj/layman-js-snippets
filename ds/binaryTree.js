'use strict'

/** 
 * Tree Data structure
 * 1. Contains only one root Node
 * 2. Contains N - 1 Links/Edges when there is N Node
 * 3. depth - From the root to node (Count the links)
 * 4. height - From the deepest leaf to the current Node
 * 5. Tree DS can be recursive in nature
*/

function Node (value, parent = null) {
  this.parentNode = parent
  this.value = value

  this.addRightNode = function(Node, value) {
    this.rightNode = Node
  }

  this.addLeftNode = function (Node, value) {
    this.leftNode = Node
  }
}

const dummyData = [1, 3, 2, 4, 9, 6, 7]

/**
 * In Binary, there should be one root node
 * each parent can have a max of two child node
 * left child node should be less of parent node
 * right child node should be greater of parent node
 */

let rootNode;

dummyData.map((el, index) => {
  if (index === 0) {
    rootNode = new Node(el)
    return 
  }
  goDeep(rootNode, el)
})

function goDeep (node, el) {
  if (el > node.value) {
    // Go Deep in the Right Side
    if (node.hasOwnProperty('rightNode')) {
      goDeep(node.rightNode, el)
    } else {
      let newNode = new Node(el, node)
      node.addRightNode(newNode)
    }
  } else {
    // Go Deep in the Left Side
    if (node.hasOwnProperty('leftNode')) {
      goDeep(node.leftNode, el)
    } else {
      let newNode = new Node(el, node)
      node.addLeftNode(newNode)
    }
  }
}

let sortedList = []

function printTree(node){
  if(node.hasOwnProperty('leftNode')){
    printTree(node.leftNode)
  }

  sortedList.push(node.value)

  if(node.hasOwnProperty('rightNode')){
    printTree(node.rightNode)
  }
}

printTree(rootNode)
module.exports = sortedList, rootNode

