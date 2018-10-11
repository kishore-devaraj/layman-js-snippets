/**
 * This file explains the difference between bind, call and apply in the basic terms
 * Bind - Assigns the context and the parameter to the calling function but it doesn't invokes it
 *        Also it returns the new function with the context binded.
 * 
 * Call- Assigns the context and the parameter (one by one) and it invokes it immediately
 * Apply -  Similar to Call function, but the parameters are passed in array
 * 
 */

 let person = {name : 'Kishore', age: 23}
 function greetPerson (greet, greetExt) {
   console.log(`${greet}, ${this.name}. ${greetExt}`)
 }

 // Bind method
bindedGreetPerson = greetPerson.bind(person)
bindedGreetPerson('Hello', 'How are you?')


// Call method
greetPerson.call(person, 'Hello', 'How are you?')

// Apply method
greetPerson.apply(person, ['Hello', 'How are you?'])

// Reference
// https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind