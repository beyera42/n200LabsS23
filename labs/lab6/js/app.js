/* 1- Loop, but big

Write a loop that displays in a div the numbers 1000, 2000, 3000, 4000, 5000. There should only be one line of code inside of your loop. */
let idDiv = document.getElementById("i") //fetches the id for "i"

let i = 1000; //sets "i" variable to 1000
for (let i = 1000; i < 6000; i += 1000) { //loads intervals of 1000 - 5000 in the console log
    console.log(i); //relays information to the console
}