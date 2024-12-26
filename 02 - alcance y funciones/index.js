/*
Function defined by user
*/

// Simple

function greet () {
    console.log("Hola JS!")
}

greet();

// With return

function return_greet () {
    return "Holaa, JS!"
}

console.log(return_greet());

// Function with argument

function arg_greet (greet, nameUser) {
    console.log(`${greet} ${nameUser}.`);
}

arg_greet("Que la fuerza te acompañe,","David");

// With argument predetermined and defined inside an expression
// This is an unnamed function assigned to default_arg_greet

const default_arg_greet = function (name = "User") {
    console.log(`Hola, ${name}`)
}

default_arg_greet();

// With argument and return

function return_args_greet (greet, name) {
    return `${greet} ${name}.`;
}

console.log(return_args_greet("Hola,","Gerónimo"));

// With multiple returns

const multiple_return_greet = () => {
    return ["Holaaa", "JS"];
}

const [value1, value2] = multiple_return_greet();
console.log(value1);
console.log(value2);

// With varible number of arguments

function variable_arg_greet(...names) {
    names.forEach(name => {
        console.log(`Saludos, ${name}`);
    });
}

variable_arg_greet("Alice", "Bob", "Charlie");

// Functions inside functions

function outer_function () {
    function inner_function () {
        console.log("Inner function here")
    }
    inner_function();
}

outer_function();

/*
Build-in functions
*/

console.log("Console.log is a function to print in terminal");
console.log("chart at position 2:","charAt".charAt(2));
console.log("concat to concatenate strings:","Hello".concat(" ","World"));
console.log("includes to check if a string contains another:","Hello".includes("ell"));
console.log("typeof to check type of value:", typeof("David"));
console.log("typeof to check type of value:", typeof(12));

/*
Variables scope local and global
*/

var global_variable = "I'm global";
console.log(global_variable);

function hello_js() {
    let local_variable = "I'm local";
    console.log(`${local_variable}, ${global_variable}`);
}

hello_js();

// Extra exercise
console.log("\n");
console.log("========================================");
console.log('Extra exercise');

const printNumbers = (text1, text2) => {
    let numberTimes = 0;
    for (let i = 1; i <= 100; i++) {
        if(i%3 == 0 && i%5 == 0) {
            console.log(`${text1} ${text2}`);
        } else if(i%3 == 0) {
            console.log(text1);
        } else if (i%5 == 0) {
            console.log(text2);
        } else {
            console.log(i)
            numberTimes++;
        }
    }

    return `Se han impreso ${numberTimes} números`;
}

console.log(printNumbers("Fizz", "Buzz"));