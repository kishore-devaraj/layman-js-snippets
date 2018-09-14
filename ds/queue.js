'use strict'

class Queue {
  constructor(){
    this.front = null
    this.rear = null
    this.size = 0
  }
}

class QueueTask {
  constructor(value, next, prev){
    this.value = value
    this.next = next
    this.prev = prev
  }
}

Queue.prototype.enqueue = function (value) {
  const queueTask = new QueueTask(value, this.rear, null)
  if(!this.rear) {
    this.rear = queueTask
    this.front = queueTask
  } else {
    this.rear.prev = queueTask
    this.rear = queueTask
  }
  this.size += 1
}

Queue.prototype.dequeue = function () {
  if(!this.front) return null
  let value = this.front.value
  this.front = this.front.prev
  if(this.front) {
    this.front.next = null
  }
  this.size -= 1
  return value
}

Queue.prototype.isEmpty = function () {
  return this.size === 0 ? true : false
}

Queue.prototype.getSize = function () {
  return this.size 
}

const queue = new Queue()
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(45)
console.log(queue)
console.log(queue.dequeue())
console.log(queue)


