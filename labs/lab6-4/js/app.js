/* 4 - Favorray

Create a string array. List at least five of your favorite things in that array.

Then, write a loop that writes to a div element each of them, with the string ", is one of my favorite things." after the thing. For instance, one line in the div might say, "Pizza, is one of my favorite things." */
let favorDiv = document.getElementById("favor") //fetches the id for "favor"
let i = 0 //sets "i" variable to 0
let x = ["singing", "dancing", "working", "painting", "gaming"] //sets up values for the string array


for (let i = 0; i < 5; i++) { //adds 1 to "i" each log, but limits inputs to 5
    favorDiv.innerHTML = x[0] + ", is my favorite thing!" + "<br/>" //says "singing, is my favorite thing"
    favorDiv.innerHTML += x[1] + ", is my favorite thing!" + "<br/>" //says "dancing, is my favorite thing"
    favorDiv.innerHTML += x[2] + ", is my favorite thing!" + "<br/>" //says "working, is my favorite thing"
    favorDiv.innerHTML += x[3] + ", is my favorite thing!" + "<br/>" //says "painting, is my favorite thing"
    favorDiv.innerHTML += x[4] + ", is my favorite thing!" + "<br/>" //says "gaming, is my favorite thing"
    console.log(i) //relays information to the console
}