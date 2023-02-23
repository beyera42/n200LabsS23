/* 2 - Beep Bop

Write a loop that runs 25 times and writes the iterand (current iteration of the loop) out onto the page inside of a div element. 

However,

1. When the iterand is divisible by 3, write the word "beep" instead
2. When the iterand is divisible by 5, write the word "bop" instead
3. When the iterand is divisible by 3 AND 5, write "beepbop" instead */
let iDiv = document.getElementById("i") //fetches the id for "i"

let i = 1; //sets "i" variable to 1
while (i < 26) {
    console.log(i);
    iDiv.innerHTML += i //increases "i" in the innerHTML by 1
    i++;
    if (i % 3 == 0) {
        iDiv.innerHTML += "beep" //outputs "beep" if "i" is divisible by 3
    }
    if (i % 5 == 0) {
        iDiv.innerHTML += "bop" //outputs "bop" if "i" is divisible by 5
    }
    if (i % 3 && 5 == 0) {
        iDiv.innerHTML += "beepbop" //outputs "beepbop" if "i" is divisible by 3 and 5
    }
}