/**
 * This file explains the OOPS Concepts in javascript and different ways
 * to achieve it
 * 
 * https://www.sohamkamani.com/blog/2016/04/30/oops-in-js/
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

/**
 * Encapsulation - Concept of binding data and methods that modifies data together
 * Abstraction - This way to achieve encapsulation
 */

 const City = function (name, country, slogan) {
    const getSlogan = () => console.log(slogan)
    return {
        getSlogan,
        name,
        country
    }
 }

const chennai = City('chennai', 'India', 'She welcomes every migirant with her open hands')
chennai.getSlogan()
/**
 * Composition - It's describe the 'has a' relationship in the objects
 */

 // Simple Composed Object would be
 
//  const Human = {
//      name: 'Kishore',
//      age : 23,
//      legs : {
//          count: 2,
//          position: 'bottom'
//      },
//      head: {
//          count: 1,
//          position: 'top',
//          eyes: {
//              count: 2
//          }
//      }
//  }

 // The above can be written programmatically like

 const Eyes = ({count =  2}) => {
     return {
         count
     }
 }

 const Head = ({count = 1, position = 'top'}) => {
     const eyes = Eyes({count: 2})
     return {
         count,
         position,
         eyes
     }
 }

 const Legs = ({count = 2, position = 'bottom'}) => {
     return {
         count,
         position
     }
 }

 const Human = function (name, age) {
    const legs = Legs({count: 2})
    const head = Head({count: 1})
    return {
        name,
        age, 
        head,
        legs
    }
}

let human = Human('Kishore', 23)

/**
 * Inheritance: A process of getting characteristics from their parent
 */

 // Way 1: Using this, new and prototype

 const Animal = function (sound) {
    this.sound = sound
 }

 Animal.prototype.sound = function () {
     console.log(this.sound)
 }

 const Dog = function (name, age) {
     this.name = name
     this.age = age
 }

 Dog.prototype = new Animal('bark')


 const Cat = function (name, age) {
     this.name = name
     this.age = age
 }

 Cat.prototype = new Animal('Meow')

 let dog = new Dog('Johnny', 3)
 let cat = new Cat('Kitty', 2)

 dog.sound()
 cat.sound()

 /***
  * Way 1 has the most common way of implementing inheritance in js
  * but it has few disadvantages. The parent method is shared via prototype
  * it makes hard to override the parent for one particular object
  * 
  * Way 2: Object.assign with prototype, new and this
  */

 const Animal = function(sound){
    this.sound = sound;
  };
  
  Animal.prototype.makeSound = function(){
    console.log(this.sound);
  };
  
  const Dog = function(name, breed){
    const self = this;
    Object.assign(self, new Animal('woof'), Animal.prototype);
    self.name = name;
    self.breed = breed;
  };
  
  const Cat = function(name, breed){
    const self = this;
    Object.assign(self, new Animal('meow'), Animal.prototype);
    self.name = name;
    self.breed = breed;
  };
  
  const dog = new Dog('Fido', 'Collie');
  const cat = new Cat('Oliver', 'Siamese');
  
  dog.makeSound();

  /**
   * The above method is fine
   * but there is better way to achieve this without using this, new 
   * and prototype
   * 
   * Way 3: Object.assign without prototype, new and this
   */

  const Animal = (sound) => {
    const makeSound = () => console.log(sound);
    return {
      makeSound
    };
  };
  
  const Dog = (name, breed) => Object.assign({
      name, breed
    }, Animal('woof'));
  
  const Cat = (name, breed) => Object.assign({
      name, breed
    }, Animal('meow'));
  
  const dog = Dog('Fido', 'Collie');
  const cat = Cat('Oliver', 'Siamese');
  
  dog.makeSound();
  cat.makeSound();