// Print name 5 times
function printName (n) {
   if(n <=0) return;
   printName(n-1);
   console.log(`${n}: Vanshika`);
}
printName(5);

// Print linearly from 1 to N times
function print1ToN (n) {
    if(n <=0) return;
    print1ToN(n-1);
    console.log(`${n}`);
 }
 let N = 11
 console.log(`Printing linearly from 1 to ${N}`)
 print1ToN(N);

 // Print linearly from N to 1 times
function printNTo1 (n) {
    if(n <=0) return;
    console.log(`${n}`);
    printNTo1(n-1);
 }
 let M = 15
 console.log(`Printing linearly from ${M} to 1`)
 printNTo1(N);

  // Print Sum of First N numbers (Parameterized Way)
function printNSum (i, sum) {
    if(i < 1) {
        console.log(sum) 
        return;
    }
    printNSum(i-1, sum+i);
 }
 let i = 3
 console.log(`Printing first ${i} number's sum`)
 printNSum(i, 0);

   // Print Sum of First N numbers (Functional Way)
function printNSumFunc (p) {
    if(p == 0) { 
        return 0;
    }
    return p + printNSumFunc(p-1);
 }
 let p = 4
 console.log(`Printing first ${p} number's sum`)
 console.log(printNSumFunc(p));

   // Factorial of First N numbers (Functional Way)
   function printNSumFact (q) {
    if(q == 0) { 
        return 1
    }
    return q * printNSumFact(q-1);
 }
 let q = 4
 console.log(`Printing first ${q} number's sum`)
 console.log(printNSumFact(q));