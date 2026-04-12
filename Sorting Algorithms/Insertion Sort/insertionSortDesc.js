function descInsertionSort (arr, n) {
   for(let i=0; i<= n-1; i++){
    let j = i;
     while(j>=0 && arr[j] > arr[j-1]){
        let temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
        j--; 
     }
   }
   return arr;
}

console.log(descInsertionSort([4, 89, 0, 23, -9, 6, 4, 8, 9.6, 4], 10))
// Time Complexity = 
// Worst and Average = O(n^2)
// Best = O(n)

// Space Complexity
// Best, Average, Worst = O(1)