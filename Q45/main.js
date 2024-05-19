"use strict";
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function createCar(manufacturer, model, ...options) {
    const car = {
        manufacturer: manufacturer,
        model: model,
    };
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
// Call the function with required information and additional properties
const car1 = createCar("Toyota", "Camry", ["color", "blue"], ["sunroof", true]);
const car2 = createCar("Tesla", "Model S", ["autopilot", true], ["battery", "100 kWh"]);
const car3 = createCar("Ford", "Mustang", ["color", "red"], ["transmission", "manual"]);
// Print the objects to ensure all information is stored correctly
console.log(car1);
console.log(car2);
console.log(car3);
