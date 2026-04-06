function findPartitionIndex(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;
    while (i < j) {
      while (i <= high - 1 && arr[i] >= pivot) {
        i++;
      }
      while (j >= low + 1 && arr[j] < pivot) {
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
  