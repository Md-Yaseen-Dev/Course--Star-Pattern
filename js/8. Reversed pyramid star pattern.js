// The reversed pyramid star pattern is a pyramid pattern upside-down.

// It uses 2 loops inside the external loop one for printing spaces and the other to print the star. First loop prints spaces and other loop print stars. Here is the code of the reverse pyramid star pattern.

// The number of spaces in a row is i and the number of stars is 2 * (n - i) - 1.

let string = '';

for (let i = 0; i <= 5; i++) {

    for (let j = 0; j < i; j++) {

        string += " "
    }

    // for (let k = 0; k < 2 * (5 - i) - 1; k++) {
    for (let k = 2 * (5 - i)  - 1; k >= 1; k--) {

        string += '*'
    }
    string += "\n"
}
console.log(string);