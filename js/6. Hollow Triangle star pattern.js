// Steps to create a hollow triangle star pattern are:

// Run 2 nested loops, 1st for 'n' times and 2nd for 1 time for the first row, 2nd for 2 times for the second row, and so on till 'n' times
// Print star for first and last position in each row and space for other positions
// In the last line print star at each position


let string = "";

for (let i = 0; i <= 5; i++) {

    for (let k = 0; k < i; k++) {

        if (i == 5) {
            string += "*"
        }

        else {

            if (k == 0 || k == i-1){
                string += "*"
            }
            else{
                string+= " ";
            }
        }
    }
    string += "\n"
}
console.log(string)