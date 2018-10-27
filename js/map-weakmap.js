/**
 * This file explains about the ES6 features Map and WeakMap
 * Map is something similiar to a dictionary to python, every key has a value
 * It stores key as item in the collection, not the reference
 */

let map = new Map()
let dummy = { 'k': 'k' }
map.set(dummy, 'hello')
map.set('a', 'a')
map.set('b', 'b')

console.log(map.size) // 3
console.log(map.has('a')) // true
console.log(map.get('a')) // 'a'
console.log(map.get(dummy)) // hello

dummy = null

for (let item of map) {
    console.log(item) // You still get [ { k: 'k' }, 'hello' ]
}

/**
 * WeakMap on the other hand store the reference to the value
 * It does not have set of key value (i.e) we cannot have size property
 * WeakMap can have object, function as its key or value, but nor primitive
 */

let weakmap = new WeakMap()
let dummy2 =  {'m': 'm'}
weakmap.set({ 'a': 'a' }, 1)
weakmap.set({ 'b': 'b' }, 2)
weakmap.set(dummy2, 'world')

console.log(weakmap.has({ 'b': 'b' })) // false
console.log(weakmap.has(dummy2)) // true
console.log(weakmap.get(dummy2)) // world

dummy2 = null
// Now the dummy2 key and value has been made null
console.log(weakmap.get(dummy2)) // undefined



