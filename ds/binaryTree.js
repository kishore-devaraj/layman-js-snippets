'use strict'

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

const dummyData = [1, 3, 2, 1, 9, 6]

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

function printTree(node){
  console.log(node.value)
  if(node.hasOwnProperty('rightNode')){
    printTree(node.rightNode)
  }
  
  if(node.hasOwnProperty('leftNode')){
    printTree(node.leftNode)
  }
}

printTree(rootNode)
