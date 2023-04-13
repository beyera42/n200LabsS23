/* Color Changer

Create an application with three grey, square divs, in a row. They should be 200px by 200px, and all floated left. Give them a margin of 5px.

Using only one event handler, write event listeners to respond to a click on each element. Each element should change to a different color: one red, one green, and one blue. Use a data attribute on the elements to store the color to be changed to.

The result, after clicking on the first and third, should look something like this: */
let i = 0;

let one = document.getElementById("one")

let two = document.getElementById("two")

let three = document.getElementById("three")

let nest = document.getElementById("nest")

one.style.height = 200 + "px"
two.style.height = 200 + "px"
three.style.height = 200 + "px"

one.style.width = 200 + "px"
two.style.width = 200 + "px"
three.style.width = 200 + "px"

one.style.backgroundColor = "#AAAAAA"
two.style.backgroundColor = "#AAAAAA"
three.style.backgroundColor = "#AAAAAA"


function red() {
    one.style.backgroundColor = "#AA0000"
    console.log("red")
}
function green() {
    two.style.backgroundColor = "#00AA00"
    console.log("green")
}
function blue() {
    three.style.backgroundColor = "#0000AA"
    console.log("blue")
}