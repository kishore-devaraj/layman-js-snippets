/**
 * Prototype based object oriented modal
 * It's common to separate data and the methods
 * 
 */

/** This is prototype is called class */
let objPrototype = {
  getValue: function () {
    return this.value
  }
}

/** Initialising with the data */
let obj1 = Object.create(objPrototype)
obj1.value = 13
console.log(obj1.getValue())


/** Extending from the class is the sub class */
let childPrototype = Object.create(objPrototype)
childPrototype.getValue = function () {
  return objPrototype.getValue.call(this) + '!!'
}

let childObj1 = Object.create(childPrototype)
childObj1.value = 23
console.log(childObj1.getValue())


/** 
 * The above code has little bit of reduntancy when
 * comes initialising the data, we can modify this
 * with help of constructor function
 */

let objPrototype1 = {
  constructor: function fn0(value) {
    this._value = value
  },
  getValue: function () {
    return this._value
  }
}

let obj2 = Object.create(objPrototype1)
obj2.constructor(10)
console.log(obj2.getValue())

let childPrototype1 = Object.create(obj2)
childPrototype1.getValue = function () {
  return obj2.getValue.call(this) + '!!'
}

let childObj2 = Object.create(childPrototype1)
childObj2.constructor(45)

console.log(childObj2.getValue())
