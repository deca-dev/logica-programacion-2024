/*
Given an array of integers, find the sum of its elements.

For example, if the array ar=[1,2,3], 1+2+3 =6 , so return 6.

Function Description

Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

simpleArraySum has the following parameter(s):

ar: an array of integers
Input Format

The first line contains an integer, , denoting the size of the array.
The second line contains  space-separated integers representing the array's elements.

Constraints


Output Format

Print the sum of the array's elements as a single integer.

Sample input:
6
1 2 3 4 10 11

Sample Output
31

*/

let input = `6
1 2 3 4 10 11`;

function simpleArraySum(ar) {
    let array = ar.split('\n')[1].split(' ');
    let sum = 0;
    for (let i = 0; i<array.length; i++) {
        sum += parseInt(array[i])
    }

    return sum;


}

console.log(simpleArraySum(input))