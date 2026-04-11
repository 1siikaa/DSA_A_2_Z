function findPartitionIndex(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (i <= high - 1 && arr[i] <= pivot) {
      i++;
    }
    while (j >= low + 1 && arr[j] > pivot) {
      j--;
    }
    if (i < j) {
      swap(arr, i, j);
    }
  }

  swap(arr, low, j);
  return j;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let ptIndex = findPartitionIndex(arr, low, high);
    quickSort(arr, low, ptIndex - 1);
    quickSort(arr, ptIndex + 1, high);
  }
  return arr; // ✅ Always return array
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(quickSort([3, 5, 6, 7, 2, 1, 4, 8, 1], 0, 8));

// Time Complexity
// Best - O(n log n)
// Average -O(n log n)
// Worst - O(n²)



// Space Complexity
// Auxiliary Space - O(1)
// Recursion Stack (avg) - O(log n)
// Recursion Stack (worst) - O(n)
