'use strict'

class LinkedList {
  constructor() {
    this.head = null,
    this.tail = null
  }
}

class Node {
  constructor(value, next, prev) {
    this.value = value
    this.next = next
    this.prev = prev
  }
}

LinkedList.prototype.addToHead = function (value) {
  // Making the new node as a head node
  const newNode = new Node(value, this.head, null)

  // Linking the new node with the old head 
  if(this.head) this.head.prev = newNode
  else this.tail = newNode
  this.head = newNode  
}

LinkedList.prototype.addToTail = function (value) {
  const newNode = new Node(value, null, this.tail)

  if(this.tail) this.tail.next = newNode 
  else this.head = newNode
  this.tail = newNode
}

LinkedList.prototype.removeFromHead = function () {
  // Return first there is no head
  if(!this.head) return null
  let value = this.head.value
  this.head = this.head.next
  if(this.head) this.head.prev = null
  else this.tail = null

  return value
}

LinkedList.prototype.removeFromTail = function () {
  if(!this.tail) return null
  let value = this.tail.value
  this.tail = this.tail.prev
  if(this.tail) this.tail.next = null
  else this.head = null
  return value
}

LinkedList.prototype.search = function (value) {
  if(!this.head) return null
  this.currentNode = this.head

  while(this.currentNode) {
    if(this.currentNode.value === value) return this.currentNode
    this.currentNode = this.currentNode.next 
  }
  return null
}

let otherLinkedList = new LinkedList()
otherLinkedList.addToHead(2)
otherLinkedList.addToHead(3)
console.log(otherLinkedList)
console.log(`Value removed from head ${otherLinkedList.removeFromHead()}`)

console.log('************************************************')

let linkedList = new LinkedList()
linkedList.addToTail(4)
linkedList.addToTail(5)
console.log(linkedList)
console.log(`Value removed from tail ${linkedList.removeFromTail()}`)

console.log('************************************************')
let searchLinkedList = new LinkedList()
searchLinkedList.addToHead(3)
searchLinkedList.addToHead(2)
searchLinkedList.addToTail(5)
console.log(searchLinkedList.search(3))
console.log(searchLinkedList.search(6))