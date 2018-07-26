/**
 * Selectors are similiar to filters that just slice a part of store.
 * Instead of mentions state.blah.blah.something, we can write a selector to store it
 * Following example will clear out the `selectors` concept
 */

// Stub store
store = {
  person : [
    {
    'name': 'John',
    'profession': 'full stack web dev'
    },
    {
    'name': 'Mike',
    'profession': 'web dev'
    },
    {
    'name': 'Harry',
    'profession': 'backend dev'
    }
  ]
}

// We can create a selector to obtain the name of the person like this
const getName = (store, index) => store.person[index].name

/** 
 * So when are refactoring the store structure, say the `person` has been modified to `persons`
 * We can easily change it one place using selectors
 * This is one of the major advantage of selectors
 **/
const getName = (store, index) => store.persons[index].name
