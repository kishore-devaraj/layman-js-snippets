/**
 * This file explains the new keyword use 'with' and 'without'
 * First lets see what happens when we don't use new keyword
 */

 function person(name, age) {
   person = {}
   person.name = name
   person.age = age
   return person
 }

 console.log(person('Kishore', 23))

 /**
  * How the get the same output with the 'new' keyword
  * Note: When we use new keyword, we use First letter has capital
  * and the this type of function is called constructor
  */

  function Person (name, age) {
    this.name = name
    this.age = age
  }

  console.log(new Person('Kishore', 23))

  /**
   * As you see the new keywords adds some hidden code to the function, 
   * so that it returns the instance 
    // this = {};
    // this.__proto__ = PersonConstructor.prototype;
    // Set up logic such that: if
    // there is a return statement
    // in the function body that
    // returns anything EXCEPT an
    // object, array, or function:
    //     return 'this' (the newly
    //     constructed object)
    //     instead of that item at
    //     the return statement;
   */


   // NOTE: We call invoke the non-constructor with new keyword, but it has no use