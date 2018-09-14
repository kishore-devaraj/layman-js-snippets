function bubbleSort (list) {
  let length = list.length
  let isSorted = false

  while (!isSorted) {
    // Flag is used to indicate whether the list is automatically sorted or not
    isSorted = true

    // Iterating through the entire list
    for(let index = 1; index < length; index++) {
       // Check with adjacent elements
       console.log(`Comparing ${list[index]} with ${list[index-1]}`)
       if (list[index-1] > list[index]) {
        isSorted = false 
        // Swap it
        console.log(`Swapping ${list[index]} with ${list[index-1]}`)
         let currentValue = list[index]
         list[index] = list[index-1]
         list[index-1] = currentValue
       }
    }

    // After x iteration comparison is reduced by x times
    length -= 1
    console.log(`Is Sorted: ${isSorted}`)
    console.log(`After iteration ${list}`)
  }
}

bubbleSort([23,34,21,65,3,67,54])