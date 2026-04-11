// Select min and swaps. Shift min at the front

function sortInAsc(arr, n) {
  for (let i = 0; i <= n - 2; i++) {
    let mini = i;
    for (let j = i; j <= n - 1; j++) {
      if (arr[j] < arr[mini]) {
        mini = j;
      }
    }
    if (mini != i) {
      let temp = arr[mini];
      arr[mini] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

console.log(sortInAsc([9, 0, 6, 4, 2, 5, 8, 9], 8));

// Time Complexity
// Best - O(n^2)
// Average -O(n^2)
// Worst - O(n²)



// Space Complexity
// Auxiliary Space - O(1)
// Recursion Stack (avg) - O(1)
// Recursion Stack (worst) - O(1)
