//Q41) Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Array of magician names
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Dynamo"];

// Function to print the names of magicians
function show_magicians(names: string[]): void {
    names.forEach((name) => {
        console.log(name);
    });
}

// Call the function with the array of magicians
show_magicians(magicians);