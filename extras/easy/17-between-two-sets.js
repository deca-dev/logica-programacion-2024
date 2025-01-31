/*
There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

1. The elements of the first array are all factors of the integer being considered
2. The integer being considered is a factor of all elements of the second array
These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

Example
a = [2,6]
b =[24,36]

There are two numbers between the arrays: 6 and 12.
6%2=0,6%6=0 ,24%6=0  and 36%6=0  for the first value.
12%2 =0, 12%6=0 and 24%12=0, 36%12=0  for the second value. Return 2.

Function Description

Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

getTotalX has the following parameter(s):

int a[n]: an array of integers
int b[m]: an array of integers
Returns

int: the number of integers that are between the sets
Input Format

The first line contains two space-separated integers,  and , the number of elements in arrays  and .
The second line contains  distinct space-separated integers  where .
The third line contains  distinct space-separated integers  where .

Constraints

Sample Input

2 3
2 4
16 32 96

Sample Output
3

Explanation

2 and 4 divide evenly into 4, 8, 12 and 16.
4, 8 and 16 divide evenly into 16, 32, 96.

4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.
*/

/*

- The elements of the first array can all divide the integer
- The integer can divide all the elements of the second array

[2,6]
[24,36]

6/2
6/6
12/2
12/6
--------
24/6
36/6
24/12
36/12

*/

const getTotalX = (a, b) => {
  let resultArray = [];
  let finalArray = [];

  for (let i = 1; i <= b[0]; i++) {
    if (a.every((num) => i % num === 0)) {
      resultArray.push(i);
    }
  }
  console.log(resultArray);

  const firstUniqueArray = [...new Set(resultArray)];

  console.log(firstUniqueArray);

  for (let i = 0; i < firstUniqueArray.length; i++) {
    if (b.every((num) => num % firstUniqueArray[i] === 0)) {
      finalArray.push(firstUniqueArray[i]);
    }
  }

  console.log(finalArray);

  const uniqueArray = [...new Set(finalArray)];

  console.log(uniqueArray);

  return uniqueArray.length;
};

console.log(getTotalX([2, 6], [24, 36]));
console.log(getTotalX([2, 4], [16, 32, 96]));


// ============================================

