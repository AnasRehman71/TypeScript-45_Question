"use strict";
//Q44) Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function orderSandwich(...items) {
    console.log(`You have ordered a sandwich with the following items:`);
    for (const item of items) {
        console.log(`- ${item}`);
    }
}
orderSandwich('turkey', 'cheese', 'lettuce', 'tomato'); // Output: You have ordered a sandwich with the following items: - turkey - cheese - lettuce - tomato
orderSandwich('ham', 'cheese'); // Output: You have ordered a sandwich with the following items: - ham - cheese
orderSandwich('roast beef', 'cheddar', 'caramelized onions', 'horseradish sauce'); // Output: You have ordered a sandwich with the following items: - roast beef - cheddar - caramelized onions - horseradish sauce
