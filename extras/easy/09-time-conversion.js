/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example

 s = '12:01:00 PM'

Return '12:01:00'.

 s = '12:01:00 AM'

Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in  hour format
Returns

string: the time in  hour format
Input Format

A single string s that represents a time in -hour clock format (i.e.: hh:mm:AM or hh:mm:ssPM ).

Constraints

All input times are valid
Sample Input 0

07:05:45PM
Sample Output 0

19:05:45
*/

let s = '07:05:45PM';
let s1 = '00:05:45AM';
let s2 = '12:05:45PM';
let s3 = '07:05:45AM';

function timeConversion(s) {
    let amOrPm = s.substring(s.length-2, s.length);
    let hour = s.substring(0,2);
    let min = s.substring(3,5);
    let sec = s.substring(6,8);
    let formattedTime = '';

    if(amOrPm == 'AM') {
        if(hour == '12') {
            hour = '00';
        } 
        formattedTime = `${hour}:${min}:${sec}`;
    } else {
        if(hour >= 1 && hour <= 11) {
            hour = parseInt(hour)+12;
        }
        formattedTime = `${hour}:${min}:${sec}`;
    }

    return formattedTime;

}

console.log(timeConversion(s));
console.log(timeConversion(s1));
console.log(timeConversion(s2));
console.log(timeConversion(s3));