/* Over and Out

Write the markup and JavaScript to place a square div on the page (100px x 100px), with a blue background. Using onmouseover and onmouseout (instead of "onclick"), change the div's color to black when the mouse is over the div, and back to blue when the mouse leaves. */

let squareDiv = document.getElementById("square") //grabs the id for square

var size = {
    height: 100,  //defines the starting size of square
    width: 100
}

squareDiv.style.height = size.height + "px"
squareDiv.style.width = size.width + "px"     //defines pixels of square
squareDiv.style.backgroundColor = "#0509fa"

function over() {
    squareDiv.style.backgroundColor = "#000"  //changes color to black when mouse hovers over square
}

function out() {
    squareDiv.style.backgroundColor = "#0509fa" //changes color back to blue when mouse is off of square
}