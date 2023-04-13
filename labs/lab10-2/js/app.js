/* Color Mixer

 

This is an application that will start a div at a black color, and as a user presses buttons associated with RGB, the div will change to new colors. The button presses should affect additively - that is. If a div is currently blue, pressing +red buttons will change the div to a purple color.

9 buttons (associated with red green and blue). There should be a +1, +5, and +10 button for each color.
1 div that will change colors to the rgb color calculated

1 div that shows the current calculated rgb color

You must use attributes on the buttons for the values to change the colors by. */
mix.style.height = 250 + "px"
mix.style.width = 500 + "px"
mix.style.backgroundColor = "#000000"

let red = 0
let green = 0
let blue = 0
function newBlack() {
    red = red + Number(event.target.dataset.amount)
    green = green + Number(event.target.dataset.amount)
    blue = blue + Number(event.target.dataset.amount)
    console.log("rgb(" + red + "," + green + "," + blue + ")")
}
function rojo() {
    mix.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"
    red = red + Number(event.target.dataset.amount)
    console.log("rgb(" + red + ", " + green + ", " + blue + ")")
}
function verde() {
    mix.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"
    green = green + Number(event.target.dataset.amount)
    console.log("rgb(" + red + "," + green + "," + blue + ")")
}
function azul() {
    mix.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"
    blue = blue + Number(event.target.dataset.amount)
    console.log("rgb(" + red + ", " + green + "," + blue + ")")
}