/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Function description

Complete the  function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers
Return

int: the absolute diagonal difference
Input Format

The first line contains a single integer, , the number of rows and columns in the square matrix .
Each of the next  lines describes a row, , and consists of  space-separated integers .

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

