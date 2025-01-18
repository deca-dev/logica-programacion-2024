/*
The distance between two array values is the number of indices between them. 
Given a, find the minimum distance between any pair of equal elements in the array. If no such value exists, return -1.

Example

a=[3,2,1,2,3]

There are two matching pairs of values: 3 and 2. The indices of the 3's are i=0 and j=4, so their distance is \j-i\ =4. 
The indices of the 2's are i=1 and j=3, so their distance is \j-i\ = 2. The minimum distance is 2.

Function Description

Complete the minimumDistances function in the editor below.

minimumDistances has the following parameter(s):

int a[n]: an array of integers
Returns

int: the minimum distance found or  if there are no matching elements
Input Format

The first line contains an integer , the size of array .
The second line contains  space-separated integers .


Output Format

Print a single integer denoting the minimum d[i,j] in a. If no such value exists, print -1.

Sample Input

STDIN           Function
-----           --------
6               arr[] size n = 6
7 1 3 4 1 7     arr = [7, 1, 3, 4, 1, 7]
Sample Output

3
Explanation
There are two pairs to consider:

 a[1] and a[4] are both 1, so d[1,4]=\1-4\=3.
 a[0] and a[5] are both 7, so d[0,5] = \0-5\ =5.
The answer is min(3,5) =3.
*/

// let a = [1, 2, 1, 2, 1];


// function minimumDistances(a) {
//   let duplicates = {};
//   let min = Infinity;

//   console.log(min == false)

//   for (let i = 0; i < a.length; i++) {
//     if (!duplicates[a[i]]) {
//       duplicates[a[i]] = [];
//     }
//     duplicates[a[i]].push(i);
//   }


//   for (let key in duplicates) {
//     let indices = duplicates[key];
//     if(indices.length >= 2) {
//         for(let j=1; j<indices.length; j++) {
//             let distance = indices[j] - indices[j-1];
//             if(distance < min) {
//                 min = distance;
//             }
//         }
//     }
//   }
//   return min === Infinity ? -1 : min;
// }

// console.log(minimumDistances(a));




let a = [1, 2, 1, 2, 1];

function minimumDistances (a) {
    let duplicates = {};
    let min = Infinity;

    for (let i = 0; i<a.length; i++) {
        if(!duplicates[a[i]]) {
            duplicates[a[i]] =[];
        }
        duplicates[a[i]].push(i);
    }

    for(let key in duplicates) {
        let positions = duplicates[key];
        if(positions.length >= 2) {
            for(let i=1; i<positions.length; i++){
                if(positions[i]-positions[i-1] < min) {
                    min = positions[i]-positions[i-1];
                }
            }
        }
    }

    return min == Infinity ? -1: min;

}

console.log(minimumDistances([3, 5, 1, 2, 4]));
// console.log(minimumDistances([7, 1, 3, 4, 1, 7]));
// console.log(minimumDistances([1, 2, 3, 4, 5]));
// console.log(minimumDistances([1, 0, 1, 0, 1, 0, 1]));
// console.log(minimumDistances([5, 5, 5, 5, 5]));
