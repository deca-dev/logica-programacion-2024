/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal (1 +5 +9) = 15  . The right to left diagonal = 3 + 5 + 9 = 17 . Their absolute difference is \15-17\ =2 .

Function description

Complete the diagnolaDifference  function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers
Return

int: the absolute diagonal difference

Input Format

The first line contains a single integer, n, the number of rows and columns in the square matrix arr.
Each of the next n  lines describes a row, arr[i] , and consists of n space-separated integers arr[i][j].

Constraints

Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

Sample Input

3
11 2 4
4 5 6
10 8 -12

Sample Output
15

*/

let arr = [ 
    [ 1, 2, 3 ], 
    [ 4, 5, 6 ], 
    [ 9, 8, 9 ] 
]

let arr_2 = [ 
    [ 11, 2, 4 ], 
    [ 4, 5, 6 ], 
    [ 10, 8, -12 ] 
]


function diagonalDifference(arr) {
    let leftD = 0;
    let rightD = 0;
    let n = arr.length;

    for (let i=0; i < n; i++){
        leftD += arr[i][i];
        rightD += arr[i][n -1- i];
    }
    return Math.abs(leftD-rightD);
}

console.log(diagonalDifference(arr))

