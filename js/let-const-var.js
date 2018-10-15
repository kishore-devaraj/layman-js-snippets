/**
 * This file is intended to clear the confusion regarding about the difference
 * in the 'let' and 'var' keyword.
 * It's also shows where the const keyword can be properly utilised
 */

 
/** 
 * Difference between 'var' and 'let'
 * 
 * let is the new keyword introduced in ES6
*/

// let and var in global scope
let name = 'kishore' // Globally scoped
var name = 'kishore' // Globally scoped

// but unlike var, let will be assigned to the global object window
let name = 'kishore' // window.name ->  undefined
var name = 'kishore' // window.name -> 'kishore'

/**
 * In Function scoped the let and var behave as the same
 */

 function function1() {
   let name = 'kishore' // function block scoped
   var name = 'kishore' // function block scoped
 }

/**
 * In Block where the real difference between var and let
 */

 function function2() {
  // i can not be accessed over here 
  for (let i = 0 ; i < 10 ; i++ ) {
     // i can be accessed here
   }
   // i can not be accessed over here
 }

 function function3() {
  // i can be accessed over here 
  for (var i = 0 ; i < 10 ; i++ ) {
     // i can be accessed here
   }
   // i can be accessed over here
 }

 /**
  * When using strict mode
  * var can be reassigned but let cannot
  */

  'use strict'
  let i = 10
  let i = 15 // i already defined


  'use strict'
  var i = 34
  var i = 35 // reassigned


  /**
   * const is similiar to let
   * It's block scoped.
   * 
   * Only difference the value cannot be reassigned
   * Also when declaring const the value should be initialised at the beginning
   */

   const app = 'myapp'
   app = 'newapp' // Cannot be reassigned

