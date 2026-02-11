// push the max at the last by element swaps
function bubbleSortAsc(arr, n) {
  let didSwap = false;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        didSwap = true;
      }
      if (!didSwap) {
        break;
      }
    }
  }
  return arr;
}
console.log(bubbleSortAsc([21, 5, 8, 9, 2, 0, 1, 3], 8));
