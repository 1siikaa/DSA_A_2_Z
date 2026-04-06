// Take an element & place it in its correct order.

function insertionSortAsc(arr, n) {
  for (let i = 0; i <= n - 1; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }
  return arr;
}

console.log(insertionSortAsc([5, 21, 0, 9, 5, 7, 6], 7));
// Worst and Average = O(n^2)
// Best case = O(n)