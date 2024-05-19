/*Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.*/

function describe_city(city: string, country: string = "Pakistan") {
  return `${city} is in ${country}.`;
}
console.log(describe_city("Karachi"));
console.log(describe_city("Islamabad"));
console.log(describe_city("Paris", "Farance"));
