/**
 * This file defines the rules for this and its order of precedence
 * Let go by high priority to low step by step
 */

 /**
  * Step 1 : Using new keyword this will be the brand new value 
  */

  function Person () { 
    console.log(this)
    this.value = 5;
    console.log(this)
  }

  new Person()

/**
 * Step 2 : Use of call, bind and apply will take the parameter has its this
 */

 let fnParam = {
   'name' : 'Kishore'
 }

 function Fn() {
    console.log(this)
 }

 let boundFn = Fn.bind(fnParam)
 boundFn()

 Fn.call(fnParam)
 Fn.apply(fnParam)


 /**
  * Step 3: When we use dot notation to access method, this will be bound to its nearest scope
  */

  let developer = {
    value: 5,
    writeCode: function (){
      console.log(this)
    }
  }

  developer.writeCode()

  /**
   * Step 4: If the function has been free invocation, i.e if it was invocated with any
   * of the above methods.
   * then this will global
   */

   function freeBoundFn () {
     console.log(this)
   }

  //  freeBoundFn() // Will return global object



  /**
   * Arrow function will override all the rules
   * this will receive the value of its surrounding scope when it's created
   */

   const newObj = {
     value: 5,
     print: function () {
       return () => console.log(this)
     }
   }

   const printFn = newObj.print() 
   printFn()