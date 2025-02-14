/*
Staircase detail

This is a staircase of size n=4:

   #
  ##
 ###
####

Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

int n: an integer
Print

Print a staircase as described above.

Input Format

A single integer, , denoting the size of the staircase.

Constraints

 .

Output Format

Print a staircase of size  using # symbols and spaces.

Note: The last line must have  spaces in it.

Sample Input

6 
Sample Output

     #
    ##
   ###
  ####
 #####
######
*/

function staircase (n){
    for(let i = 0; i<n; i++) {
        for(let j = 0; j<n; j++) {
            if(j < n-i-1) {
                process.stdout.write(" ");
            } else {
                process.stdout.write("#")
            }
            process.stdout.write("#")
        }
        console.log("");
    }
}

staircase(6);
staircase(4);