'use strict'

/** 
 * This file contains ECMAScript6 way of defining class
 * and other things associated with it
 */

 /** 
  * Class Declaration 
  * The Important difference for class declaration and function declarations
  * is that function declaration can be hoisted while class declarations is not
  */
class Person {
	constructor(name, age){
		this.name = name
		this.age = age
	}
}

let kishore = new Person('Kishore',23)
let gautham = new Person('gautham',23)

console.log(kishore.name)
console.log(gautham)

/** 
 * Class Expression
 * It can be named or unnamed
 */
let Employee = class {
	constructor(name) {
		this.employeeName = name
	}
}

let Employer = class Employer {
	constructor(name) {
		this.employerName = name
	}
}

/**
 * Contents of Class Body
 * constructor, static, prototype
 */

 class Dog {
	 constructor(name, age){
		 this.dogName = name
		 this.age = age
	 }

	 // Getter: 
	 get getAge(){
		return this.calculateAge()
	 }

	 calculateAge() {
		return this.age
	 }
 }
 
let tonka = new Dog('Tonko',4)
console.log(tonka.getAge)

/**
 * Static methods can be called without instantiation of the class
 */

 class Company {
	 static about(){
		 console.log('Static method: This method is about the Company class')
	 }
 }

 Company.about()

 /** 
  * Instance Properties
  */
 class Rectangle {
	constructor(height, width) {    
	  this.height = height;
	  this.width = width;
	}
  }

  // Declaring static variable outside the class Body
  Rectangle.staticWidth = 30

  // Declarting prototypes for the function
  Rectangle.prototype.prototypeWidth = 40
let rect1 = new Rectangle(10, 10)
let rect2 = new Rectangle(20, 20)
console.log(rect1.width)
console.log(rect1.prototypeWidth)
console.log(rect2.prototypeWidth)

/**
 * Sub Classes
 * Can be extended from regular class
 * Or even old function based classes
 */

 class Vehicle {
	 constructor(name){
		 this.name = name
	 }

	 moves(){
		 console.log(`${this.name} moves.`)
	 }
 }

 class Car extends Vehicle {
	 constructor(name){
		 super(name)
		 this.name = name
	 }

	 runs(){
		console.log(`${this.name} runs.`)
	}
 }

 let miniCupper = new Car('miniCupper')
 miniCupper.moves()
 miniCupper.runs()
 