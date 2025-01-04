// Concatenation
let greeting = 'Hello' + ' ' + 'World';

let name = 'World';
let greeting_2 = `Hello ${name}`;

// Accesing Characters
let str = 'Hello';
let firstChar = str[0]; // 'H' - Using bracket notation

// Length
let len = str.length; // 5

// ChartAt is a method that returns the character at a specific index
let char = str.charAt(1); // 'e'

// IndexOf is a method that returns the index of the first occurrence of a character
let index = str.indexOf('l'); // 2

// Substring is a method that returns a part of a string between two indexes
let sub = str.substring(1, 4); // 'ell'

// Slice is a method similar to Substring, but can accept negative indexes
let sli = str.slice(1, 4); // 'ell'

// Uppercase is a method that returns the string in uppercase
let upper = str.toUpperCase(); // 'HELLO'

// Lowercase is a method that returns the string in lowercase
let lower = str.toLowerCase(); // 'hello'

// Trim is a method that removes whitespace from both ends of a string
let stri = '  Hello Sir ';
let trimmed = stri.trim(); // 'Hello Sir

// Replace is a method that replaces a character with another character'
let str_2 = 'Hello World';
let newStr = str_2.replace('World', 'JavaScript'); // 'Hello JavaScript'
let newStr_2 = str_2.replace('o', 'x'); // 'Hellx World'


// Split is a method that splits a string into an array of substrings
let str_3 = 'Hello World';
let arr = str_3.split(' '); // ['Hello', 'World']

// Advanced excercise
/*
Create a program that analyzes two different words and performs checks
to determine if they are:
- Palindromes
- Anagrams
- Isograms
*/

function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');
    if(str == reversedStr) {
        return true
    }
    return false;
}

function isIsogram(str) {
    let strObj = {};
    let strObjValues;
    let isIsogramBool = true;
    for(let i=0; i<str.length; i++) {
        if(str[i] in strObj) {
            strObj[str[i]]++;
        } else {
            strObj[str[i]]=1;
        }
    }
    strObjValues = Object.values(strObj);

    for (let j=0; j<strObjValues.length; j++) {
        if (strObjValues[j] != 1) {
            isIsogramBool = false;
        } 
    }
    return isIsogramBool;
}


const mainFunction = (str) => {
    if(isIsogram(str)) {
        console.log(`${str} Is an isogram`)
    } else if (isPalindrome(str)) {
        console.log(`${str} Is a palindrome`)
    } else {
        console.log(`${str} Is nothing`)
    }
}

mainFunction('camion');
mainFunction('anilina');
mainFunction('reconocer');
mainFunction('radar');
mainFunction('banco');




