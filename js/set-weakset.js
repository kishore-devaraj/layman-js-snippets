/**
 * Sets in javascript is similiar to its mathematical counterpart
 * where all the elements stored are unique
 */

/**
 *  Two types of Set
 *  Set - Regular set
 *  This is somewhat similiar to array but stores unique data and has few methods
 *  to perform operations
 */

let people = new Set()
people.add('Kishore')
people.add('Kishore')
people.add('Devaraj')
people.add('devaraj')

console.log(people.size) // 3
console.log(people.has('Kishore')) // true
console.log(people.has('kishore')) // false

for (let p of people) {
    console.log(p)
}

/**
 * WeakSet - The WeakSet object lets you store weakly held objects in a collection. 
 * Objects without a reference will be garbage collected.
 */

let fruits = {'tomato': 'red' } // Object has reference
let fruitSet = new WeakSet()
fruitSet.add(fruits).add({'tomato': 'red' })

console.log(fruitSet.size) // undefined
console.log(fruitSet.has(fruits)) // true
console.log(fruitSet.has({'tomato': 'red'})) // false

