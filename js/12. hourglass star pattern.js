// The hourglass star pattern is also made up of pyramid and reverse pyramid star patterns.

// Observe in the above pattern it is a reverse pyramid and a pyramid together. Use the above concepts to create a diamond shape.


let string = '';

for (let i = 0; i < 5; i++) {

    for (let k = 0; k < i; k++) {

        string += " "
    }
    // for (let j = 2 * (5 - i) - 1; j >= 1; j--) {

    for (let j = 2 * 5 - i - 1; j > i; j--) {
        string += "*"
    }
    string += "\n"

}

for (i = 2; i <= 5; i++) {

    for (j = 5; j > i; j--) {

        string += " "
    }

    for (k = 0; k < i * 2 - 1; k++) {

        string += "*"
    }
    string += "\n"
}
console.log(string)