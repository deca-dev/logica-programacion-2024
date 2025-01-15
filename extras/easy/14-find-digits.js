/*
An integer d is a divisor of an integer n if the remainder of n/d= 0.

Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.

Example
n=124

Check whether 1,2  and 4 are divisors of 124. All 3 numbers divide evenly into 124 so return 3.

n=111


Check whether 1, 1, and 1 are divisors of 111. All 3 numbers divide evenly into 111 so return 3.

n =10


Check whether 1 and 10 are divisors of 10. 1 is, but 0 is not. Return 1.

Function Description

Complete the findDigits function in the editor below.

findDigits has the following parameter(s):

int n: the value to analyze
Returns

int: the number of digits in  that are divisors of 
Input Format

The first line is an integer, t, the number of test cases.
The t subsequent lines each contain an integer, n.

Sample Input

2
12
1012

Sample Output
2
3

Explanation

The number 12 is broken into two digits, 1 and 2. When 12 is divided by either of those two digits, the remainder is 0 so they are both divisors.

The number 1012 is broken into four digits, 1, 0, 1, and 2. 1012 is evenly divisible by its digits 1, 1, and 2, but it is not divisible by 0 as division by zero is undefined.
*/

// let a = `2
// 12
// 1012
// `;

// function findDigits(n) {
//   let arr = n.split("\n");
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "") {
//       arr.splice(i, 1);
//     }
//   }
//   let numberCases = arr.shift();
//   console.log(arr);

//   for (let i of arr) {
//     for (let j = 0; j < i.length; j++) {
//       if (i % i[j] == 0) {
//         count++;
//       }
//     }
//   }

//   console.log(count);
// }

// findDigits(a);

const findDigits2 = (n) => {

  let count = 0;
  let arr = n.toString().split('');;

  for(let i of arr) {
    if(n%i == 0) {
        count++;
    } 
  }
return count;

};

console.log(findDigits2(1012));


