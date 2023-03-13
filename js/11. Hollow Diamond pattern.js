// A hollow diamond pattern is a simple diamond shape that has only a boundary that is made up of stars. It is a combination of the diamond and the reverse diamond pattern.

let string = '';

for (let i = 1; i <= 5; i++) {  // external

    for (let j = 1; j <= 5 - i; j++) {  // internal for spaces

        string += " "
    }

    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {  // internal for printing star and midddle space.

        if (i == 1) {

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


for (let i = 1; i <= 5 - 1; i++) {

    for (let j = 0; j < i; j++) {
        string += " ";
    }
    for (let k = (5-i) * 2 - 1; k>=1; k--) {  // internal for printing star and midddle space.
            if (k == 1 || k == (5 - i) * 2 - 1) {

                string += "*"
            }
            else {
                string += " "

            }

        
    }
    string += "\n"
}
console.log(string
);