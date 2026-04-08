// Assume max and compare with all elements and update actual max and swap actual max with initial assumption max
function selectionSortDesc(arr, n) {
  let max;
  for (let i = 0; i <= n - 2; i++) {
    max = i;
    for (let j = i; j <= n - 1; j++) {
      if (arr[j] > arr[max]) {
        max = j;
      }
    }
    if (max !== i) {
      let temp = arr[max];
      arr[max] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

console.log(
  selectionSortDesc([8, 4, 2, 14, 20, 92, 62, 34, 13, 3, 4, 6, 0, 10, 102],
  15)
);

// Time Complexity
// Best Case - O(n^2)
// Average Case - O(n^2)
// Worst Case - O(n^2)

// Space Complexity
// Best Case - O(1) In Place Sorting
// Average Case - O(1) In Place Sorting
// Worst Case - O(1) In Place Sorting

