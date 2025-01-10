/*
Value Assignment
Primitive data types (numbers, strings, booleans, null, undefined, and symbol) are assigned by value. This means that when you assign one variable to another, the value is copied.

let a = 10;
let b = a; // b is a copy of the value of a
b = 20;

console.log(a); // Output: 10
console.log(b); // Output: 20

In this example, a and b are independent of each other. Changing the value of b does not affect a.

//=============================================
Reference Assignment
Non-primitive data types (objects, arrays, functions) are assigned by reference. This means that when you assign one variable to another, both variables point to the same object in memory.

let obj1 = { name: "David" };
let obj2 = obj1; // obj2 is a reference to obj1
obj2.name = "Alice";

console.log(obj1.name); // Output: Alice
console.log(obj2.name); // Output: Alice

In this example, obj1 and obj2 point to the same object. Changing the value of obj2.name also affects obj1.name.

Complete Example
Here’s an example that demonstrates both types of assignment:

In summary, primitive types are assigned by value, and non-primitive types are assigned by reference in JavaScript.
*/
//  ===================
/*
EXTRA CHALLENGE (optional):

Create two programs, each receiving two parameters (defined as variables beforehand).
In one case, each program receives two parameters by value, and in the other, by reference.
These parameters should be swapped within the program, returned, and their return values
assigned to two new variables different from the original ones. Then, print
the values of the original and the new variables, verifying that their values
have been swapped in the new ones.
Also, ensure the original variables retain their original values.

*/

//Funcion para intercarbiar variables por valor
var intercambiarValor = function (num1, num2) {
    var temp = num1;
    num1 = num2;
    num2 = temp;
    return [num1, num2];
};
var primerValor = 10;
var segundoValor = 5;

console.group('Valores antes del intercambio');
console.log('primerValor: ', primerValor);
console.log('segundoValor: ', segundoValor);
console.groupEnd();

var _a = intercambiarValor(primerValor, segundoValor), nuevoPrimerValor = _a[0], nuevoSegundoValor = _a[1];

console.group('Valores despues del intercambio');
console.log('primerValor: ', primerValor);
console.log('segundoValor: ', segundoValor);
console.groupEnd();

console.group('Nuevos valores intercambiados');
console.log('nuevoPrimerValor: ', nuevoPrimerValor);
console.log('nuevoSegundoValor: ', nuevoSegundoValor);
console.groupEnd();

//Funcion para intercarbiar variables por referencia
var intercambiarReferencias = function (user) {
    var temp = user.mainEmail;
    user.mainEmail = user.secondEmail;
    user.secondEmail = temp;
    return user;
};

var usuarioOriginal = {
    name: 'Andres',
    mainEmail: 'andres@new.com',
    secondEmail: 'andres@test.com',
};

console.group('Referencias antes del intercambio');
console.log('usuarioOriginal: ', usuarioOriginal);
console.groupEnd();

var nuevoUsuario = intercambiarReferencias(usuarioOriginal);

console.group('Referencias despues del intercambio');
console.log('usuarioOriginal: ', usuarioOriginal);
console.groupEnd();

console.group('Nuevas Referencias intercambiadas');
console.log('nuevoUsuario: ', nuevoUsuario);
console.groupEnd();




