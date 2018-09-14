function heapSort (array) {
  // Build Max Heap Binary Tree
  maxHeapBinaryTree(array)
  let lastElementIndex = array.length - 1

  while (lastElementIndex > 0) {
    swap(array, 0, lastElementIndex)
    heapify(array, 0, lastElementIndex)
    lastElementIndex -= 1
  }

  console.log(`Sorted Array is ${array}`)
}

function maxHeapBinaryTree (array) {
  let i = Math.floor((array.length / 2) - 1)
  
  while (i >= 0) {
    heapify(array, i, array.length)
    i--;
  }
  console.log(`Heap Binary Tree as Array ${array}`)
}

function heapify (array, i, max) {
  let index, leftChildIndex, rightChildIndex

  while (i < max) {
    index = i
    leftChildIndex = (index * 2) + 1
    rightChildIndex = leftChildIndex + 1 

    if(leftChildIndex < max && array[leftChildIndex] > array[index]) {
      index = leftChildIndex
    }

    if(rightChildIndex < max && array[rightChildIndex] > array[index]) {
      index = rightChildIndex
    }

    if(i === index) {
      return
    }

    swap(array, i, index)
    i = index
  }
}

function swap(array, minNumberIndex, maxNumberIndex) {
  console.log(`Swapping ${array[minNumberIndex]} with ${array[maxNumberIndex]}`)
  let tempVar = array[maxNumberIndex]
  array[maxNumberIndex] = array[minNumberIndex]
  array[minNumberIndex] = tempVar
}

heapSort([5,3,2,4,6,1])