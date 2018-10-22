/**
 * Prototype inheritance is the most fundamental 
 * type of inheritance in javascript
 */

 let person = {
   name: 'Kathirvel',
   getName: function () {
     console.log(this.name)
   }
 }

 let child = Object.create(person)
 child.name = 'Devaraj'

 let grandChild = Object.create(child)

 person.getName() // Kathirvel
 child.getName() // Devaraj
 grandChild.getName() // Devaraj

