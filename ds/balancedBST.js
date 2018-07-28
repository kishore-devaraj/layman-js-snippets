'use strict'

// Importing the unbalanced BST from a module
let sortedList = require('./binaryTree')

/**
 * Balanced BST is one that satisifies the following
 * 1. Height of sub node should be same or differ by atmost 1
 * 2. RootNode should be changed accordingly
 */

 console.log(sortedList)
 // Searching the number in sorted array
 let count = 0;
 divideAndConquer(sortedList, 11)


 function divideAndConquer(unbalancedArray, numberToBeSearched){
    count++
    
    if(unbalancedArray.length === 0){
        console.log('Number not found')
        return
    }
    let middleIndex = unbalancedArray.length % 2 === 0 ? unbalancedArray.length / 2 - 1: parseInt((unbalancedArray.length / 2)) 

    // If number found return the index
    if(numberToBeSearched === unbalancedArray[middleIndex]) {
        console.log(`Number found at ${count} iteration`)
        return
    }

    if(numberToBeSearched < unbalancedArray[middleIndex]){
        divideAndConquer(unbalancedArray.slice(0,middleIndex+1), numberToBeSearched)
    } else {
        divideAndConquer(unbalancedArray.slice(middleIndex+1),numberToBeSearched)
    }
}

// Function to find the largest number
// findLargest(sortedList)

// function findLargest(sortedList){
//     console.log(sortedList[sortedList.length -1 ])
// }

// // Function to find the smallest number
// findSmallest(sortedList)

// function findSmallest(sortedList){
//     console.log(sortedList[0])
// }
