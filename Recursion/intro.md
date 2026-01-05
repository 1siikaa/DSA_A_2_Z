# Recursion

## What is Recursion?
Recursion is a technique in programming where a function calls itself repeatedly until a specific condition, known as the base case, is met.

### Important Point
 - Recursion must have at least one base case and  at least one recursive case. 
 - It uses call stack internally.

## What is Recursion Stack?
The recursion stack is a part of call stack that stores information about each recursive function call such as (local variables, parameters, return address, etc) until the function finishes execution.

### Important Point
 - Each recursive call gets its own stack frame
 - Stack frames are removed when the function returns
 - Works in LIFO (Last In, First Out) order

## What is Recursive Tree?
A recursive tree is a conceptual tree-like structure that represents all recursive function calls and how they branch during execution.

### Important Point
 - Each node represents a function call
 - Children represent recursive calls made by that function
  - Helps analyze:
	 - Time complexity
	 - Number of calls
	 - Overlapping subproblems (important in DP)


## What is stack overflow?
A stack overflow occurs when the recursion stack exceeds its memory limit due to:

### Important Point
 - Missing base case
 - Incorrect base case
 - Excessively deep recursion
	- Program crashes or throws runtime error

