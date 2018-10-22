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
console.log(person1.getValue())

/**
 * Extending this to subclass
 */

 function SpecialPerson (value) {
   Person.call(this, value)
 }

 SpecialPerson.prototype = Object.create(Person.prototype)
 SpecialPerson.prototype.constructor = SpecialPerson

 /** Overriding and Polymorphism */
 SpecialPerson.prototype.getValue = function () {
    return Person.prototype.getValue.call(this) + '!!'
 }

 let person2 = new SpecialPerson(11)
 console.log(person2.getValue())