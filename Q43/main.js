"use strict";
//Q43) Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Array of magician names
let magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Dynamo"];
// Function to print the names of magicians
function show_magicians(names) {
    names.forEach((name) => {
        console.log(name);
    });
}
// Function to add 'the Great' to each magician's name
function make_great(names) {
    const greatMagicians = [];
    for (let i = 0; i < names.length; i++) {
        greatMagicians.push(`the Great ${names[i]}`);
    }
    return greatMagicians;
}
// Create a new array with 'the Great' added to each name
let greatMagicians = make_great([...magicians]);
// Show the original magicians
console.log("Original magicians:");
show_magicians(magicians);
// Show the modified magicians
console.log("\nGreat magicians:");
show_magicians(greatMagicians);
