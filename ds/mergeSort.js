function MergeSort (array) {
  let length = array.length

  if (length === 1) {
    return 
  } 

  let midNumInArray = Math.floor(length / 2)
  let leftArray = array.slice(0, midNumInArray)
  let rightArray = array.slice(midNumInArray)

  MergeSort(leftArray)
  MergeSort(rightArray)  
 
  Merge(leftArray, rightArray, array)
  return array
}

function Merge (leftArray, rightArray, array) {
  let index = 0
  
  // Core logic to perform merge operation with
  // adjacent list

  console.log('array is: ', array);
  while (leftArray.length && rightArray.length) {
    if (rightArray[0] < leftArray[0]) {
      array[index++] = rightArray.shift();
    } else {
      array[index++] = leftArray.shift();
    }
  }

  while (leftArray.length) {
    console.log(`Left Array is ${leftArray}`)
    array[index++] = leftArray.shift()
  }

  while (rightArray.length) {
    console.log(`Left Array is ${rightArray}`)
    array[index++] = rightArray.shift()
  }

  console.log(`Sorted Array ${array}`)
}



MergeSort([4,5,23,68,3,6,7])