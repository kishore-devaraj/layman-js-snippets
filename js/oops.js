/**
 * This file explains the OOPS Concepts in javascript and different ways
 * to achieve it
 */

 /**
  * OBJECT - The very basic things that all OO Langauge has, can be
  * easily implemented in javascript
  */

  let person = {
      name: 'Kishore',
      age: 23,
      walk: function () {
          console.log(`${this.name} is walking`)
      }
  }

person.walk()

/**
 * CLASS - There is no actual class in javascript, the closest thing
 * that resembles class is constructor function
 * Two types to define class
 */

 // 1. Using this, prototype and new


 const Person = function (name, age) {
     this.name = name
     this.age = age
 }

 Person.prototype.walk = function () {
     console.log('He is walking')
 }

 let personObj = new Person('Kishore', 24)
 console.log(personObj)

// 2. Using Closure

const Bird = function (name, breed) {
    const fly = () => console.log('The Bird is flying')
    return {
        name,
        breed,
        fly
    }
}

const bird = Bird('parrot', 'polycolor')
console.log(bird)

