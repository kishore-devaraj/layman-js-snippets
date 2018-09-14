function countingSort(array, minValue, maxValue) {
  let arrayIndex = 0;
  let countIndex = 0;
  let countArray = []
  console.log(`Actual array is ${array}`)
  
  // Initialize placeholder for count array 
  while(countIndex <= maxValue) {
    countArray[countIndex++] = 0
  }
  // console.log(countArray)

  // Iterate the array and increment the index of the count array 
  // for the respective value in the array
  countIndex = 0
  while(countIndex <= maxValue) {
    countArray[array[countIndex++]]++
  }
  console.log(`Count array is ${countArray}`)

  for(countIndex = 0; countIndex <= maxValue; countIndex++) {
    while(countArray[countIndex]-- > 0) {
      console.log('Replacing value of ' + array[arrayIndex] + ' with ' + countIndex)
      array[arrayIndex++] = countIndex
    }
  }
  console.log(`Sorted Array is ${array}`)
}

countingSort([3, 2, 0, 3], 0, 3)