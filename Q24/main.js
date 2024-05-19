"use strict";
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */
// Creating a variable
let apple = "apple";
//Test for equality
console.log("apple is equal to apple");
console.log(apple === "apple");
//Test for inequality
console.log("apple is not equal to apple");
console.log(apple !== "apple");
///Test using the lower case function
let uppercaseApple = "Apple";
console.log("Apple is equal to apple after converting to lower case");
console.log(uppercaseApple.toLocaleLowerCase() === "apple");
// inequality
console.log("Apple is not equal to apple after converting to lower case");
console.log(uppercaseApple.toLocaleLowerCase() !== "apple");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let ten = 10;
let twenty = 20;
// Test for equality
