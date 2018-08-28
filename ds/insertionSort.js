function insertionSort (list) {
  let length = list.length

  for (let unsortedIndex = 0; unsortedIndex < length; unsortedIndex++) {
    let unsortedValue = list[unsortedIndex]
    console.log(`Current unsorted value ${unsortedValue}`)
    
    // To iterate the rightside loop
    // If the current unsorted value is lesser than left side counter part
    // This loop never runs for index 0
    for (sortedIndex = unsortedIndex; sortedIndex > 0 && list[sortedIndex - 1] > unsortedValue; 
        sortedIndex--) {
      console.log(`Inserting ${list[sortedIndex - 1]} at index ${sortedIndex}`)
      list[sortedIndex] = list[sortedIndex-1]
    }

    // This is where the current unsorted value is being allocated in the array
    console.log(`Inserting ${unsortedValue} at index ${sortedIndex}`)
    list[sortedIndex] = unsortedValue

    console.log(`Array at ${unsortedIndex + 1} iteration ${list}`)
  }
}

insertionSort([4,6,2,5,7])