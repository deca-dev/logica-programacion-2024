/*
    * EXERCISE:
    * - Create examples using all types of operators in your language:
    *   Arithmetic, logical, comparison, assignment, identity, membership, bitwise...
    *   (Keep in mind that each language may have different ones)
    * - Using operations with any operators you like, create examples
    *   that represent all types of control structures in your language:
    *   Conditional, iterative, exceptions...
    * - Print the result of all examples to the console.
    *
    * EXTRA CHALLENGE (optional):
    * Create a program that prints all the numbers between 10 and 55 (inclusive)
    * that are even and are neither 16 nor multiples of 3.
    *
    * Surely, by carefully exploring the possibilities, you’ll discover something new.
 */


// Arithmetic Operators

let a = 5;
let b = 3;
let c = a + b;
console.log('Arithmetic Operators:')
console.log(`Addition: ${a}+${b} =`,a+b);
console.log(`Substraction: ${a}-${b} =`,a-b);
console.log(`Multiplication: ${a}*${b} =`,a*b);
console.log(`Division: ${a}/${b} =`,a/b);
console.log(`Exponentiation: ${a}**${b} =`,a**b);
console.log(`Remaninder/Module: ${a}%${b} =`,a%b);
console.log("\n")

// Relational Operators
console.log('Relational Operators:')
console.log(`Less than: <: 10 < 3 =`, 10<3);
console.log(`Greater than: >: 10 > 3 =`, 10>3);
console.log(`Less than or equal: <=: 10 <= 3 =`, 10<=3);
console.log(`Greater than or equal: >=: 10 >= 10 =`, 10>=10);
console.log("\n")

// Equality Operators
console.log('Equality Operators:')
console.log(`Equality: ==: 10 == 3 =`, 10==3);
console.log(`Inequality: !=: 10 != 3 =`, 10!=3);
console.log("\n")

// Binary logical Operators
console.log('Binary Logical Operators:')
console.log(`AND &&: 10+3 == 13 && 5-1 == 4:`, 10+3 == 13 && 5-1 == 4);
console.log(`OR ||: 10+3 == 13 || 5-1 == 4:`, 10+3 == 13 || 5-1 == 4);
console.log(`Nullish ||: null/undefined ?? 'my string' =`, null ?? 'my string');
console.log("\n")

// Assignment Operators
console.log('Assignment Operators:')
console.log(`Asignment: =: myNumber = 3`);
console.log(`Addition: +=: myNumber += 3`);
console.log(`Subtraction: -=: myNumber += 3`);
console.log(`Addition: *=: myNumber *= 3`);
console.log(`Division: /=: myNumber /= 3`);
console.log("\n")

// Control
console.log('Control Conditionals:')
console.log('If Control:')
let myString = 'Hola';
if(myString == "Holaa") {
    console.log("myString is Holaa")
} else if (myString == "Hola") {
    console.log("myString is Holaa")
} else {
    console.log("myString is not Holaa nor Hola")
}
console.log('For Control:')
for (let i=0; i<10; i++) {
    console.log(i);
}
console.log('Exception Try/Catch Control:')
try {
    console.log(10/0);
} catch (e) {
    console.log("Can't divide by zero", e)
} finally {
    console.log("Done with exception handling")
}
console.log("\n")

// Extra difficulty
console.log("Extra difficult exercise:")
console.log("Create a program that prints all the numbers between 10 and 55 (inclusive), that are even and are neither 16 nor multiples of 3:");

for (let i = 10; i<= 55; i++) {
    if(i%2 == 0 && i != 16 && i%3 != 0) {
        console.log(i)
    }
}
