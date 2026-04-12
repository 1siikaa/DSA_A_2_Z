function bubbleSortDesc(arr, n) {
  let didSwap = false;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        didSwap = true;
      }
    }
    if (didSwap == false) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSortDesc([5, 67, 89, 0, -2, 5, -6, 7], 8));
// Time Complexity
// Best - O(N)
// Average - O(N^2)
// Worst - O(N^2)

// Space Complexity
// Best - O(1)
// Average - O(1)
// Worst - O(1)
