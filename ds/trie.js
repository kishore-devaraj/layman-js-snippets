'use strict'

/**
 * Trie Implementation in vanilla javascript
 * Application: 
 * 1. Autocomplete feature in google
 * 2. Searching for string in a sentence.
 * 3. Used to check the existence of the word.
 */

class Node {
  constructor(props) {
    this.key = props.hasOwnProperty('key') ? props.key : ''
    this.value = props.hasOwnProperty('value') ? props.value : null
    this.parent = props.hasOwnProperty('parent') ? props.parent : null
    this.ref = new Array(26)
  }
}

class Trie {
  constructor(sentence) {
    this.root = null
    this.sentence = sentence
    this.words = this.sentence.split(' ')
    this.node = null
  }

  createTrie() {
    this.words.map((word) => {
      const chars = word.toLowerCase().split('')
      this.createTree(chars)
    })
  }

  createTree(chars) {
    if (this.root === null) {
      this.root = new Node({})
    }

    this.node = this.root

    chars.forEach(char => {
      // Char Code starts at 97 -> a
      const charValue = char.charCodeAt(0) - 97
      if (this.node.ref[charValue] === undefined) {
        // Create the Node
        const node = new Node({ key: char, parent: this.node })
        this.node.ref[charValue] = node
        this.node = node
      } else {
        // Node already exists
        this.node = this.node.ref[charValue]
      }
    })

    this.node.value = true
  }

  insertSentence(sentence) {
    this.sentence = sentence
    this.words = this.sentence.split(' ')
    this.words.forEach(word => this.insertWord(word))
  }

  insertWord(word) {
    const chars = word.toLowerCase().split('')
    this.createTree(chars)
  }

  deleteWord(word) {
    if (this.isWordExist(word.toLowerCase())) {
      let deleteFurther = true
      while (deleteFurther) {
        const parent = this.node.parent
        const key = this.node.key
        this.node.value = false
        if (this.node.ref.some(ref => ref !== undefined)) {
          // This node has references
          deleteFurther = false
        } else {
          parent.ref[key.charCodeAt(0) - 97] = null
          this.node = parent
        }
        console.log(key)
      }
      return true
    } else {
      return false
    }
  }

  isSentenceExist(sentence) {
    const words = sentence.split(' ')
    return words.every(word => this.isWordExist(word))
  }

  isWordExist(word) {
    this.node = this.root
    const chars = word.toLowerCase().split('')
    return chars.every((char) => this.isCharExist(char)) ? this.node.value ? true : false : false
  }

  isCharExist(char) {
    const charValue = char.charCodeAt(0) - 97
    if (this.node.ref[charValue] === undefined) {
      return false
    } else {
      this.node = this.node.ref[charValue]
      return true
    }
  }
}

const trie = new Trie('some sommed')
trie.createTrie()
// console.log(trie)
// console.log(trie.isSentenceExist('them number'))
// trie.insertSentence('them number')
// console.log(trie.isSentenceExist('them number'))
// console.log(trie.isWordExist('some'))
// console.log(trie.isWordExist('sommed'))
// console.log('****************************')
// console.log(trie.deleteWord('sommed'))
// console.log(trie.isWordExist('some'))
// console.log(trie.isWordExist('sommed'))
