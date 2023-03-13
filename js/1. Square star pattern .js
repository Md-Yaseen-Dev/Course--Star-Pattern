// To create a square star pattern run 2 nested for loop. Execute each loop for 'n' number of times, where 'n' is number of rows/columns in the square, i.e for(let i = 0; i < n; i++).

// The internal loop will run for 'n' number of times which will print starts in a row and a newline at the end of the loop (\n) while the outer loop will run the internal loop for 'n' number of times which will print starts in a column

let string = "";

for (let i = 0; i < 5; i++) {   // external loop


    for (let j = 0; j < 5; j++) {  // internal loop

        string += "*"
    }
    string += "\n"
}

console.log(string);


// u can use write code without "\n"


for (let i = 0; i < 5; i++) {   // external loop

    let str = "";

    for (let j = 0; j < 5; j++) {  // internal loop

        str += "*"

    }
    console.log(str)

}

