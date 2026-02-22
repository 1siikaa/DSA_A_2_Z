// Divide and merge algo

function merge(arr, low, mid, high) {
  let left = low;
  let right = mid + 1;
  let sortedArr = [];
  while (low <= mid && right <= high) {
    if (arr[low] <= arr[right]) {
      sortedArr.push(arr[low]);
      low++;
    } else {
      sortedArr.push(arr[right]);
      right++;
    }
  }

  while (low <= mid) {
    sortedArr.push(arr[low]);
    low++;
  }
  while (right <= high) {
    sortedArr.push(arr[right]);
    right++;
  }
  for (let i = left; i <= high; i++) {
    arr[i] = sortedArr[i - left];
  }
}

function mergeSort(arr, low, high) {
  if (low == high) return;
  let mid = Math.floor((low + high) / 2);
  console.log(mid);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
  return arr;
}
console.log(mergeSort([4, 2, 6, 0, 1, 5, 3, 7, 9, 2, 4, 5, 13], 0, 12));
