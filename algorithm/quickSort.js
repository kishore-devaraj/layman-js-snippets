function QuickSort (list, leftIndex, rightIndex) {
  console.log(`Unsorted List ${list.slice(leftIndex, rightIndex + 1)}`)
  
  // Each individual list is itself sorted so no need
  // to go through quicksort
  
  if (list.length > 1) {
    let pivotIndex;
    pivotIndex = partition(list, leftIndex, rightIndex)

    console.log(`Pivot value ${list[pivotIndex]}`)
    
    // If both left or right index has not reached the pivot
    // Keep comparing
    if (leftIndex < pivotIndex - 1) {
      QuickSort(list, leftIndex, pivotIndex - 1)
    }

    if (rightIndex > pivotIndex) {
      QuickSort(list, pivotIndex, rightIndex)
    }
  }
  return list
}

function partition(list, leftIndex, rightIndex) {
  let pivotValue = list[Math.floor((leftIndex + rightIndex) / 2)]


   console.log('** pivot is: ', pivotValue);
   console.log('** left is: ', list[leftIndex]);
   console.log('** right is: ', list[rightIndex]);

  // If the left index is less than right keep compare and swapping
  while (leftIndex <= rightIndex) {
    while (list[leftIndex] < pivotValue) {
      console.log(`Left is at ${list[leftIndex]}`)
      leftIndex++
    }
    
    while(list[rightIndex] > pivotValue) {
      console.log(`Right is at ${list[rightIndex]}`)
      rightIndex--
    }

    while(leftIndex <=  rightIndex) {
      console.log(`Swapping ${list[leftIndex]} with ${list[rightIndex]}`)
      swap(list, leftIndex, rightIndex)

      leftIndex++
      rightIndex--
    }
 }
return leftIndex
}

function swap (list, leftIndex, rightIndex) {
  let tempValue = list[rightIndex]
  list[rightIndex] = list[leftIndex]
  list[leftIndex] = tempValue
}

let array = [19, 22, 63, 105, 2, 46]
console.log(QuickSort(array, 0, array.length - 1))