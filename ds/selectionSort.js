function selectionSort (list) {
  let length = list.length

  for (let index = 0; index < length; index++){
    // Make the unsorted first element as the minumum number
    let minNumIndex = index;

    // Compare it with rest of the elements
    for (let indexNextToMin = index + 1; indexNextToMin < length; indexNextToMin++) {
      console.log(`Comparing ${list[minNumIndex]} with ${list[indexNextToMin]}`)
      if (list[minNumIndex] > list[indexNextToMin]) {
        minNumIndex = indexNextToMin
      }
    }

    // Swapping the elements
    if (minNumIndex != index) {
      let currentValue = list[minNumIndex]
      list[minNumIndex] = list[index]
      list[index] = currentValue
    }

    console.log(`Sorted List after ${index + 1} iteration ${list}`)

  }
}

selectionSort([4,9,35,3,4,32,765])