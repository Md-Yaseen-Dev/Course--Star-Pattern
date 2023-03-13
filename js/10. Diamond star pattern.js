// The diamond star pattern is a combination of the pyramid and the reverse pyramid star pattern.

// Observe in the above pattern it is a pyramid and a reverse pyramid together. Use the above concepts to create a diamond shape.



// pyramid pattern

let string = "";

for (let i = 0; i <= 5; i++) {


    for (let j = 0; j < 5 - i; j++) {

        string += " "
    }

    for (let k = 0; k < 2 * i - 1; k++) {

        string += "*";
    }

    string += '\n';
}
// console.log(string);

//  reverse pyramid

for (let i = 1; i <= 5; i++) {

    for (let j = 0; j < i; j++) {

        string += " "
    }

    // for (let k = 0; k < 2 * (5 - i) - 1; k++) {
    for (let k = 2 * (5 - i)  - 1; k > 0; k--) {

        string += '*'
    }
    string += "\n"
}
console.log(string);
