// Print name 5 times
function printName(n) {
  if (n <= 0) return;
  printName(n - 1);
  console.log(`${n}: Vanshika`);
}
printName(5);

// Print linearly from 1 to N times
function print1ToN(n) {
  if (n <= 0) return;
  print1ToN(n - 1);
  console.log(`${n}`);
}
let N = 11;
console.log(`Printing linearly from 1 to ${N}`);
print1ToN(N);

// Print linearly from N to 1 times
function printNTo1(n) {
  if (n <= 0) return;
  console.log(`${n}`);
  printNTo1(n - 1);
}
let M = 15;
console.log(`Printing linearly from ${M} to 1`);
printNTo1(N);

// Print Sum of First N numbers (Parameterized Way)
function printNSum(i, sum) {
  if (i < 1) {
    console.log(sum);
    return;
  }
  printNSum(i - 1, sum + i);
}
let i = 3;
console.log(`Printing first ${i} number's sum`);
printNSum(i, 0);

// Print Sum of First N numbers (Functional Way)
function printNSumFunc(p) {
  if (p == 0) {
    return 0;
  }
  return p + printNSumFunc(p - 1);
}
let p = 4;
console.log(`Printing first ${p} number's sum`);
console.log(printNSumFunc(p));

// Factorial of First N numbers (Functional Way)
function printNSumFact(q) {
  if (q == 0) {
    return 1;
  }
  return q * printNSumFact(q - 1);
}
let q = 4;
console.log(`Printing first ${q} number's sum`);
console.log(printNSumFact(q));

// Array Reversal
function arrayReversal(n, i, arr) {
  if (Math.floor(n / 2)<= i) return arr;
  swapArr(i, (n - i - 1), arr);
  return arrayReversal(n, i + 1, arr);
}

function swapArr(left, right, arr) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  return arr;
}

console.log(arrayReversal(7, 0, [1,2,3,4,5,6,7]))

// String Reversal
function reverseString(str) {
    let left = 0;
    let right = str.length - 1;
    let result = str;
  
    while (left < right) {
      result =
        result.substring(0, left) +
        result[right] +
        result.substring(left + 1, right) +
        result[left] +
        result.substring(right + 1);
  
      left++;
      right--;
    }
  
    return result;
  }
  
  //console.log(arrayReversal(8, 0, "Vanshika"))
  let str = "Vanshika"
  str[1] = str[2]
  console.log(str.substring(1, 6))


  // stringReversal Using Recursion
  function strReversal (str) {
    if(str.length == 0) return str;
    return str.slice(str.length-1) + strReversal(str.slice(0, str.length-1))

  }
  console.log(strReversal("Vanshika"))

  // String Palindrome or not
  function palindromeCheck (i, n, str) {
    if(i>= n/2) return true;
    if(str[i] !== str[n-i-1]){
      return false;
    }
    return palindromeCheck(i+1, n, str);
  }
  console.log(palindromeCheck(0, 5, "MADAM"));


  // Fibonacci Series
  function fibonacciSeries (n) {
    if( n <= 1) {
      return n;
    }
    return fibonacciSeries(n-1) + fibonacciSeries(n-2);
  }
  console.log(fibonacciSeries(7))


