'use strict'

class Stack {
  constructor() {
    this.top = null
    this.prev = null
    this.size = 0
  }
}

class StackFrame {
  constructor(value, prev) {
    this.value = value
    this.prev = prev
  }
}

Stack.prototype.push = function (value) {
  let stackFrame = new StackFrame(value, this.prev)
  if(!this.top) this.prev = null
  else this.prev = this.top
  
  this.top = stackFrame
  this.top.prev = this.prev
  this.size += 1
}

Stack.prototype.pop = function () {
  if(!this.top) return null
  let value = this.top.value
  this.top = this.top.prev
  this.size -= 1
  
  return value
}

Stack.prototype.isEmpty = function () {
  return this.size === 0 ? true : false
}

Stack.prototype.getTop = function () {
  return this.top
}

let stack = new Stack()
stack.push(2)
stack.push(3)
stack.push(15)

// console.log(stack)
// console.log(stack.pop())
// console.log(stack)

console.log(stack.isEmpty())
console.log(stack.getTop())