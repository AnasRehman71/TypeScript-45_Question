"use strict";
/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`The size of the shirt is ${size} and the message printed on it is "${message}".`);
}
make_shirt(); // large shirt with default message
make_shirt("medium"); // medium shirt with default message
make_shirt("small", "I love JavaScript"); // small shirt with a different message
