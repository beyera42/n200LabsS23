/*Bad word catcher with loops

 

For the purposes of this exercise, bad words are: clear, water, tires.

Create an application that:

Takes input from a user using a simple text input field.
Splits the string on spaces
Loops through  the array looking for bad words in the array
Adds 1 to a tally count when a bad word is found
Outputs to the document
If any bad words were found (found / not found)
How many bad words, in total, were found
Clears out the text field so the user can input a new string
 

For example, if the user input "clear water is clear", there are 3 bad words in the string.*/
let talk = document.getElementById("talk");

function mouth() {
    let input = talk.value;
    console.log(talk.value)
    let splitstring = input.split(" ")
    console.log(splitstring)
    for (var i = 0; i < splitstring.length; i++) {
        console.log(splitstring[i])
        if (splitstring[i] == "tires") {
            console.log("found tires")
        }
        if (splitstring[i] == "water") {                // This function locates the words "clear", "water", and "tires" and logs that it found them using a for loop
            console.log("found water")
        }
        if (splitstring[i] == "clear") {
            console.log("found clear")
        }
    } // I had a headache... I can't figure out how to do it right now. I'm sorry.
}