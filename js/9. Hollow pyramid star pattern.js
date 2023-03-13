// Steps to create a hollow pyramid star pattern are:

// Run 2 nested loops, 1st for 'n' times and there are 2 internal loops one to print the first series of spaces and the other to print star and space series
// Print star for first and last position in each row and space in between
// The print star at each position in the last row


let string = '';

for (let i = 1; i <= 5; i++) {  // external

    for (let j = 1; j <= 5-i; j++) {  // internal for spaces

        string += " "
    }

    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {  // internal for printing star and midddle space.

        if (i == 1 || i == 5) {

            string += "*"
        }
        else {
            if (k == 0 || k == 2 * i - 2) {

                string += "*"
            }
            else {
                string += " "

            }

        }
    }
    string += "\n"
}

console.log(string);
