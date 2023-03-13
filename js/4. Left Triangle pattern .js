// To create the left triangle pattern in javascript again run 2 nested for loop external loop will take care of columns of pattern and the internal loop will print rows of the pattern.

// You can observe from the above-shown pattern that we need to run an external loop for 'n' time while the internal loop runs for 1 time in the first execution, 2 times in the second execution, and so on till 'n' times.

// You can use the value of i from the external loop which will increase from 1 to 'n' inside the internal loop as a condition.

let string = "";

for (let i = 0; i <= 5; i++) {

    for (let j = 0; j < i; j++){

        string += "*";

    }
    string += "\n";

}
console.log(string);