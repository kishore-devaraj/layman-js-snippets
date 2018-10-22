/**
 * Primities types include
 * 1. Number
 * 2. Boolean
 * 3. String
 * 4. Undefined
 * 5. Null
 * 6. Object
 * 
 * The following type are not primitive, but special type of objects
 * 1. Function
 * 2. Array
 * 3. RegExp
 */

 /**
  * Primitives are pass by value
  */

  let a = 4;
  let b = a;
  b = 5
  console.log(b) // 5
  console.log(a) // 6

  /**
   * Object on the other hand are pass by reference
   */

   let obj1 = {
     name: 'Kishore'
   }

   let obj2 = obj1
   obj2.name = 'Devaraj'

   console.log(obj1.name) // Devaraj
   console.log(obj2.name) // Kishore

   /**
    * To delete the exisiting property of the object using delete keyword
    */

    obj1.name = undefined // Don't use this
    delete obj1.name // Instead use this

    