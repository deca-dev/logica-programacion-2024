// Array
let array = [1, 2, 3, 4, 5];
array.push(100); // Add an element to the end of the array
// console.log(array);
array.unshift(0); // Add an element to the start of the array
// console.log(array);
array.pop(); // Remove the last element of the array
array.shift(); // Remove the first element of the array
array.splice(2, 1); // Remove the element at index 2
// console.log(array);

// Object
let object = { name: "David", age: 30 };
// console.log(Object.keys(object));
// console.log(Object.values(object));
object.gender = "M";
object.address = '123 Main St';
delete object.age;
// console.log(object); 
// console.log(object['name']);
// console.log(object.address)

// Set
let set = new Set([1, 2, 3, 4, 5]);
set.add(6);
// console.log(set.has(3)); // Output: true

// Map
let map = new Map();
map.set('name', 'David');
map.set('age', 30);
// console.log(map.get('name')); // Output: David


// Extra exercise

/*
Create a contact agenda through the terminal.

- You must implement search, insertion, and update functionalities.
- Each contact should have a name and a phone number.
- The program should first ask what operation the user wants to perform and then request the necessary data to execute it.
- The program must not allow the input of non-numeric phone numbers (or enforce a specific number of digits).
- There should also be an option to terminate the program.
*/

const readline = require ('readline');

console.log("Bienvenido a la agenda de contactos");
let contacts = {};
let input = 0;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
mainMenu();

function mainMenu() {
    rl.question("\nSelecciona una opción:\n1. Buscar contacto\n2. Agregar contacto\n3. Actualizar contacto\n4. Ver Todos\n5. Salir\n\n ", (input) => {
        if (input == 1) {
            rl.question("\nIngresa el nombre a buscar: ", (name) => {
                if (contacts[name]) {
                    console.log(`\nEl numero de ${name} es ${contacts[name]}`);
                } else {
                    console.log("\nContacto no encontrado");
                    mainMenu();
                }
            });
        } else if (input == 2) {
            rl.question("\n-Ingresa el nombre del contacto: ", (name) => {
                rl.question("-Ingresa el número del contacto: ", (phone) => {
                    contacts[name] = phone;
                    console.log(`\nSe agregó a ${name} agregado correctamente`);
                    mainMenu();
                })
            })
        } else if (input == 3) {
            rl.question("\n -Ingresa el nombre del contacto a actualizar: ", (name) => {
                if (contacts[name]) {
                    rl.question("- Ingresa el nuevo número del contacto: ", (phone) => {
                        contacts[name] = phone;
                        console.log(`\nSe actualizó el número de ${name} correctamente`);
                        mainMenu();
                    })
                } else {
                    console.log("\nContacto no encontrado");
                    mainMenu();
                }
            });
    
        } else if (input == 4) {
            console.log("\nLista de contactos:");
            for (let contact in contacts) {
                console.log(`- ${contact}: ${contacts[contact]}`);
            }
            mainMenu();
        }
    });

}





