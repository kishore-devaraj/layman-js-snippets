/**
 * Functions are special type of object that has same key and value pair
 */

function getName() {
  return 'Kishore Devaraj'
}

/**
 * The above function will be created as
 * getName: {
 *  name: getName, // Name of the function
 *  length: 0, // Number of the parameter
 *  prototype: Prototype of its parent(i.e say Object)
 * }
 * You can also add properties to the function
 */

getName.personName = 'Kishore'
/**
 * Since function is a special type of object, it is also pass by reference
 */

const getNameFunction = getName

/**
 * Function defined in the object are called methods
 */

let obj = {
  key1: 'value1',
  getName: function () {
    return 'Kishore Devaraj'
  }
}

/***
 * The biggest gotcha here is 'this' keyword
 */

 function printNumber () {
   console.log(this.number)
 }

 let obj1 = {
   number: 23
 }

 let obj2 = {
   number: 78
 }

 obj1.printNumber() // 23
 obj2.printNumber() // 78
printNumber() // undefined when we are using strict
