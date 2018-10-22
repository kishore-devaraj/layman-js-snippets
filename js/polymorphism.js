/**
 * Polymorphism means same name but with different implementations
 * or behaviours
 */

let obj = {
  firstName: 'Devaraj',
  getName: function () {
    return this.firstName
  }
}

let child = Object.create(obj)
child.getName = function () {
  return obj.getName.call(this) + '!!'
}
child.firstName = 'Kishore'

console.log(obj.getName()) // Devaraj
console.log(child.getName())  //Kishore!!

/**
 * In the above example the first obj's getName has a different implementations
 * and the child obj that inherited has a different implementation, but both having the
 * same name
 */

 