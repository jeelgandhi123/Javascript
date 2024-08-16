// Create a function using the “function” keyword that takes a String as an argument & returns the number of vowels in the string.
function ps1(userstring) {
    let count = 0;
    for (value of userstring) {
        if (value == 'A' || value == 'E' || value == 'I' || value == 'O' || value == 'U' || value == 'a' || value == 'e' || value == 'i' || value == 'o' || value == 'u') {
            // console.log(value);
            count++;
        }
    }
    console.log(count);
}
ps1(prompt("enter your name:"));

// Create an arrow function to perform the same task
const ps2 = (str) => {
    let count = 0;
    for (value of str) {
        if (value == 'A' || value == 'E' || value == 'I' || value == 'O' || value == 'U' || value == 'a' || value == 'e' || value == 'i' || value == 'o' || value == 'u') {
            // console.log(value);
            count++;
        }
    }
    console.log(count);
}

ps2("jeel");
