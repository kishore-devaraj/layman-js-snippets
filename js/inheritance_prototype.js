/**
 * This file explains the prototype and how inheritance is based on it
 * There are totally three first class function
 * 1. Object
 * 2. Array
 * 3. Function itself
 */
console.log(Array)
console.log(Function)
console.log(Object)
 /** 
 * One of the key take away it __proto__ is different from function prototype
 * 
 * Object literals created using Object.create or {} has __proto__ equals to object.prototype
 * Objects created using new keyword from the function has prototype
 */

 let obj = {}
 console.log(obj)
 console.log(obj.__proto__)
 console.log(obj.__proto__ === Object.prototype)

/**
 * The __proto__ of the object.prototype is null,
 * That is the top most __proto__
 */
 console.log(obj.__proto__.__proto__ === null)


 /**
  * Javascript object lookup works like this
  * 1. First it look for key in the object
  * 2. Next it look for the key in object.__proto__
  * 3. The lookup will continue till the __proto__ is null
  * 
  * 
 __proto__ === null
 |
 |
 __proto__ === Object.prototype
 |
 |
 { object literal }
  */


  /**
   * Lets play with __proto__ and see its behaviour
   * CAUTION: NEVER MODIFIY __proto__ !!!!!
   */


  obj = {}
  obj.__proto__['testKey'] = 'testValue'
  console.log(obj)
  console.log(obj.testKey)

  console.log(obj.hasOwnProperty('testKey'))
  console.log(obj.__proto__.hasOwnProperty('testKey'))

  /**
   * Function Prototypes
   * 1. With new keyword the __proto__ of the obj will be prototype of the function it got initiated from
   * 2. The __proto__ of that function prototype will be Object.prototype
   * 3. The __proto__ of that Object.prototype will be null
   * 
   * Visually drawn
   * __proto__ === null
|
|             
__proto__ === Object.prototype
|
|
__proto__ === Fn.prototype
|
|
obj
   */

  function Fn() {}
  obj = new Fn()
  console.log(obj.__proto__ === Fn.prototype)
  console.log(obj.__proto__.__proto__ === Object.prototype)
  console.log(obj.__proto__.__proto__.__proto__ === null)


  /**
   * We can implement inheritance through prototype
   * This is mainly due to performance. (Uses shared memory)
   * If we implement this behaviour in contructor or methods, it will affect memory optimization
   */


  Fn.prototype.print = function () {
    console.log('Printing from the prototype function')
  }

  obj = new Fn()
  obj.print()


  /**
   * Object.create will take obj as its parameters and creates a brand new object
   * with the prototype sets to the object we have passed
   */

   let prototypeObj = {
     'testKey': 'testValue'
   }

   obj = Object.create(prototypeObj)

   console.log(obj.__proto__ === prototypeObj)