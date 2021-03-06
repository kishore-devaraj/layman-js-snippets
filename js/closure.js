'use strict'

/** 
 * Simple Closures examples its uses and its pitfalls
 */

function addSquares (x, y) {
  function square (z) {
    return z * z
  }
  return square(x) + square(y)
}

console.log(addSquares(5, 6))

/**
 * We can preserve a variable or a function
*/

function outerAdd (x) {
  function innerAdd (y) {
    return x + y
  } 
  return innerAdd
}

let add = outerAdd(5)
console.log(add(4))

/**
 * Multiple nested closures (closure chain)
 * C forms closure including B
 * B forms closure including A
 * so C also have access to A scope
 * but viceversa not possible
 */

function outer (a) {
  function inner (b) {
    function deep (c) {
      return a * b * c
    }
    return deep
  }
  return inner
}

console.log(outer(4)(5)(6))

/**
 * Variable Name conflicts may happen when the outer variable name
 * is used in the inner function
 */

/**
  * We can use it as a getter and setter
*/
function createPerson (name) {
  let sex
  return {
    setName: function (newName) {
      name = newName
    },
    getName: function () {
      return name
    },
    setSex: function (newSex) {
      if (typeof newSex === 'string' && (newSex.toLowerCase() === 'male' ||
          newSex.toLowerCase() === 'female')) {
        sex = newSex
      }
    },
    getSex: function () {
      return sex
    }
  }
}

let person = createPerson('Kishore')
console.log(person.getName())
person.setName('Kaveri')
person.setSex('female')
console.log(person.getName())
console.log(person.getSex())

/**
 * Closure doesn't need to be named function
 */
let getSecretCode = (function () {
  let secretCode = '43lj54k5n34d5'
  return function () {
    return secretCode
  }
})()

console.log(getSecretCode())

/**
 * Closure is combination of function delared in lexical enviorment
 * Closure can be used for callback function for event to change particular
 */

function makeSizer (size) {
  return function() {
    document.body.style.fontSize = size
  }  
}

let fontSize12 = makeSizer(12)
let fontSize14 = makeSizer(14)
let fontSize16 = makeSizer(16)

/**
 * We can emulate private function and variables
 * using closure
 */

let counter = (function () {
  let countValue = 0;
  function actionOnCountValue (value) {
    countValue = value
  }
  return {
    increment: function () {
      actionOnCountValue(countValue + 1)
    },
    decrement: function () {
      actionOnCountValue(countValue - 1)
    },
    value: function () {
      return countValue
    }
  }
})()

console.log(counter.value())
counter.increment()
counter.increment()
console.log(counter.value())
counter.decrement()
console.log(counter.value())
console.log(counter.countValue)