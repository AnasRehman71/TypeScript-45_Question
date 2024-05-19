//Q42) Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Array of magician names
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Dynamo"];

// Function to print the names of magicians
function show_magicians(names: string[]): void {
    names.forEach((name) => {
        console.log(name);
    });
}

// Function to add 'the Great' to each magician's name
function make_great(names: string[]): void {
    for (let i = 0; i < names.length; i++) {
        names[i] = `The Great ${names[i]}`;
    }
}

// Modify the array of magicians
make_great(magicians);

// Call the function to show the modified list of magicians
show_magicians(magicians);