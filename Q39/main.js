"use strict";
/*Q39) City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/
function city_country(city, country) {
    return `${city} , ${country}`;
}
let result1 = city_country("Islamabad", "Pakistan");
console.log(result1);
let result2 = city_country("Peshawar", "Pakistan");
console.log(result2);
let result3 = city_country("Berlin", "Germany");
console.log(result3);
