//     *
//    ***
//   *****
//  *******
// *********

// The Pyramid star pattern is a famous star pattern, you can see the shape of the pattern above.

// It uses 2 loops inside the external loop one for printing spaces and the other to print stars.

// The number of spaces in a row is n - i in each row and the number of stars in a row is 2 * i - 1.


let string = "";

for (let i = 0; i <= 5; i++) {


    for (let j = 0; j < 5 - i; j++) {

        string += " "
    }

    for (let k = 0; k < 2 * i - 1; k++) {

        string += "*";
    }

    string += '\n'
}
console.log(string);