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
        const node = new Node({ key: char })
        this.node.ref[charValue] = node
        this.node = node
      } else {
        // Node already exists
        this.node = this.node.ref[charValue]
      }
    })

    this.node.value = true
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

const trie = new Trie('Peter Petted the pepper')
trie.createTrie()
// console.log(trie)
console.log(trie.isWordExist('them'))