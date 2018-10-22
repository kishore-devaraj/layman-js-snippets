/**
 * Similar to prototype based model where we can achieve the 
 * object oriented programming. We have one more way to achieve
 * this same thing using 'new' keyword. 
 * 
 * This is called classical object oriented programming model
 */

/**
 * Here instead of creating a object with constructor,
 * We create constructor function
 */

function Person(value) {
  this._value = value
}

/**
 * The above function is constructor function and the object created
 * for this type of function will be
 * Person = {
 *  name: 
 *  length:
 *  prototype: Person.prototype
 * }
 * 
 * Person.prototype = {
 *  constructor: Person
 * }
 * 
 * From the above result, we can conclude that whenever we create a function
 * we create two objects in the memory.
 * 
 * The Person.prototype behaves like a class here, we can add new methods
 * and extends subclass from it.
 */

Person.prototype.getValue = function () {
  return this._value
}

let person1 = new Person(10)
console.log(person1.getValue()) // 10

/**
 * Extending this to subclass
 */

function SpecialPerson(value) {
  Person.call(this, value)
}

SpecialPerson.prototype = Object.create(Person.prototype)
SpecialPerson.prototype.constructor = SpecialPerson

/** Overriding and Polymorphism */
SpecialPerson.prototype.getValue = function () {
  return Person.prototype.getValue.call(this) + '!!'
}

let person2 = new SpecialPerson(11)
console.log(person2.getValue()) // 11!!

/**
 * Instanceof method is used to check two object whether they are same
 * It's only applicable for classical model not for prototype model
 */

console.log(person1 instanceof Person) // true
console.log(person1 instanceof SpecialPerson) // false
console.log(person2 instanceof Person) // true

/**
 * This same classical model can be rewritten with ecmascript 6
 * 'class' syntax
 */

//  class Person {
//    constructor(value) {
//      this._value = value
//    }

//    getValue () {
//      return this._value
//    }
//  }

//  let person3 = new Person(3)
//  console.log(person3.getValue()) // 3

//  class SpecialPerson extends Person {
//    constructor(value) {
//      super(value)
//    }

//    getValue () {
//     return super.getValue() + '!!'
//    }
//  }

//  let person4 = new SpecialPerson(56)
//  console.log(person4) // 56!!

