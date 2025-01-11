/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example
arr = [1,3,5,7,9]

The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24. The function prints 16 24

Function Description

Complete the miniMaxSum function in the editor below.

miniMaxSum has the following parameter(s):

arr: an array of  integers
Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

Input Format

A single line of five space-separated integers.

Constraints


Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5
Sample Output

10 14
*/

/*
1. Take a 5 length arr
2. Iterate through the array and find the min value
    that can be calculated by summing 4 of the 5 ints
3. Use a nested for to sum each digit with the next 3

0 + 1 + 2 + 3 // 4
0 + 1 + 2 + 4 // 3 
0 + 1 + 3 + 4 // 2
0 + 2 + 3 + 4 // 1
1 + 2 + 3 + 4 // 0

*/

// let arr = [1, 3, 5, 7, 9];
// let sum = 0;

// console.log(arr.reduce((a, b) => Math.max(a, b)));

// function miniMaxSum(arr) {
//   let sum = 0;
//   let highestNumber = Math.max(...arr);
//   let lowestNumber = Math.min(...arr);
//   let minSum = 0;
//   let maxSum = 0;
//   for (let i of arr) {
//     sum += i;
//   }

//   minSum = sum - highestNumber;
//   maxSum = sum - lowestNumber;

//   console.log(minSum, maxSum);
// }

// miniMaxSum(arr);






let array = [1,3,5,7,9];

function miniMaxSum(arr) {
  let minValue = arr.reduce((a,b) => Math.min(a,b));
  let maxValue = arr.reduce((a,b) => Math.max(a,b));
  let sum = 0;
  let minSum = 0;
  let maxSum = 0;


  for(let i of arr) {
    sum += i;
  }

  for (let i in arr) {
    console.log(arr[i])
  }

  minSum = sum - maxValue;
  maxSum = sum - minValue;

  console.log(minSum, maxSum)

}
miniMaxSum(array);