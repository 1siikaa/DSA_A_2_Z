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
    return arr;
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

console.log(quickSort([3, 5, 6, 7, 2, 1, 4, 8, 1], 0, 8));


// Time and Space Complexity
// Time Complexity. O(n) + O(log n) = O(n log n)
// O(n) - for iterating the whole array in findPartitionIndex function
// O(log n) - for dividing elements and then conquering it
// Best Case - O(n) + O(log n) = O(n log n)
// Average Case - O(n) + O(log n) = O(n log n)
// Worst Case - O(n) + O(log n) = O(n log n)
// Space complexity
// O(1) - Auxiliary Space only
// O (N) - Recursion stack space
