function heapSort (array) {
  // Build Max Heap Binary Tree
  maxHeapBinaryTree(array)
}

function maxHeapBinaryTree (array) {
  let i = Math.floor((array.length / 2) - 1)
  
  while (i >= 0) {
    heapify(array, i, array.length)
    i--;
  }
  console.log(`Final Heap Binary Tree in Array ${array}`)
}

function heapify(heap, i, max) {
  var index, leftChild, righChild;
  
  while(i < max) {
    console.log(`Array current status ${heap}`)
    index = i;
    console.log(`Current Parent Index: ${i}`)

    leftChild = 2*i + 1;
    righChild = leftChild + 1;

    if (leftChild < max && heap[leftChild] > heap[index]) {
      console.log(`Left Child ${leftChild} is candidate for swapping with parent`)
      index = leftChild;
    }

    if (righChild < max && heap[righChild] > heap[index]) {
      console.log(`Right Child ${righChild} is candidate for swapping with parent`)
      index = righChild;
    }
      
    if (index == i) {
      return;
    }

    swap(heap,i, index);
    
    i = index;
  }
}

function swap(array, minNumberIndex, maxNumberIndex) {
  console.log(`Swapping ${array[minNumberIndex]} with ${array[maxNumberIndex]}`)
  let tempVar = array[maxNumberIndex]
  array[maxNumberIndex] = array[minNumberIndex]
  array[minNumberIndex] = tempVar
}

heapSort([5,3,2,4,6,1])