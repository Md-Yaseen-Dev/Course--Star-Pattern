// Steps to create a hollow square star pattern are:

// Create a variable to store the string and assign it with an empty string
// Create a for loop to run for 'n' number of times, where 'n' is number of rows/columns in the square, i.e for(let i = 0; i < n; i++)
// Inside the loop, create a for loop that prints a star (*) at the beginning and end of the line and space in between
// Also, keep in mind that the first and last row should have only stars
// Add a new line after each row


let string = "";

for (let i = 0; i < 5; i++) {

    for (j = 0; j < 5; j++) {

        if (i == 0 || i == 4) {

            string+="*"
        }
        else{
            if(j == 0 || j == 4){
                string+="*"

            }

            else{

                string+=" "
            }
        }
        
    }
    string+="\n"
}

console.log(string)