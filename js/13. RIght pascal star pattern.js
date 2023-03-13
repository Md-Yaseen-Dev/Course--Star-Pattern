// The right pascal star pattern is created using 2 nested loops.

// You can observe in the above pattern it is nothing but the right triangle star pattern and reversed triangle star pattern together. Here is the code for the right pascal star pattern.

let string = "";
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {

        string += "*"
    }
    string += "\n"
}

for (let i = 1; i < 5; i++) {

    for (let j = 5; j > i; j--){
        string+="*"
    }
    string+="\n"
}
console.log(string);