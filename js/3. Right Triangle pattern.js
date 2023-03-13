// o create a right triangle pattern in javascript you will have to deal with 3 loops, 1 of which is external and 2 are internal. The external loop will execute internal loops for 'n' number of times and the internal loop will design a pattern for each row.

// From the above pattern, you can see each row has a series of stars and spaces. The number of stars in a row starts from 1 preceding with 'n-1' spaces and ends with 'n' star and 0 spaces.

// Create 2 internal loops, 1st print n - i spaces and 2nd print i stars, where i is the number of times the external loop is executed.

let string = "";

for (let i = 0; i <= 5; i++) {  // external

    for (let j = 0; j < 5 - i; j++) { // internal

        string += " "
    }

    for (let k = 0; k < i; k++) { // internal

        string += "*"
    }
    string += "\n"

}
console.log(string)