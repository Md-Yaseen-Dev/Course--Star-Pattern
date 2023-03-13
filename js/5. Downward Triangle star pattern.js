// To create a downward triangle star pattern use a nested loop, it is also known as a reverse star pattern. From the above-shown pattern, you can see the number of stars decreases from 'n' to 1.

// Run a for loop inside an external loop whose number of iterations decreases from 'n' to 1.

let string = "";

for (let i = 0; i <= 5; i++) {

    for (j = 5; j > i; j--) {

        string += "*"
    }
    string += "\n"
}
console.log(string);


// ----- second method of solving------------

let str = '';

for (let i = 0; i <= 5; i++) {

    for (let k = 0; k < 5 - i; k++){

        str+="*"
    }
    str+="\n"
}
console.log(str)