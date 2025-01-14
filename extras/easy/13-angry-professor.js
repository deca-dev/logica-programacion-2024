/*
A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, the professor decides to cancel class if fewer than some number of students are present when class starts. 
Arrival times go from on time (arrivalTime<+0) to arrived late (arrivalTime >0).

Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.

Example

n=5
k=3
a= [-2,-1,0,1,2]


The first 3 students arrived on. The last 2 were late. The threshold is 3 students, so class will go on. Return YES.

Note: Non-positive arrival times (a[i]<=0) indicate the student arrived early or on time; positive arrival times (a[i]>0) indicate the student arrived a[i] minutes late.

Function Description

Complete the angryProfessor function in the editor below. It must return YES if class is cancelled, or NO otherwise.

angryProfessor has the following parameter(s):

int k: the threshold number of students
int a[n]: the arrival times of the n students

Returns
string: either YES or NO

Input Format

The first line of input contains , the number of test cases.

Each test case consists of two lines.

The first line has two space-separated integers, n and k, the number of students (size of a) and the cancellation threshold.
The second line contains n space-separated integers (a[1], a[2]) that describe the arrival times for each student.

Constraints

Sample Input

2
4 3
-1 -3 4 2
4 2
0 -1 2 1

Sample Output
YES
NO

Explanation

For the first test case, . The professor wants at least  students in attendance, but only  have arrived on time ( and ) so the class is cancelled.

For the second test case, . The professor wants at least  students in attendance, and there are  who arrived on time ( and ). The class is not cancelled.
*/

// let k = 3;
// let a = [ -1, -3, 4, 2 ];

let k = 2;
let a = [ 0, -1, 2, 1 ];

const angryProfessor = (k,a) => {
    let studentOnTime = 0;
    for(let i of a) {
        i<=0 ? studentOnTime++ : 0;
    }
    return studentOnTime>= k ? "NO" : "YES";
}

console.log(angryProfessor(k,a))