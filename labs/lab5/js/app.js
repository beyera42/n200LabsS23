/* Peak Pixels

Write the markup and JS to place a square div on the page. 100px by 100px, green background.
Make it so that when the div is clicked, it increases its size by 10% every time.

Hints:

Make a variable to store the height and width of the object
to set the height and width, set to varName + "px"
10% is .1 bigger,or 1.1 * the original size */

let squareDiv = document.getElementById("square") //grabs the id for square

var size = {
    height: 100,   //defines the starting size of square
    width: 100
}

squareDiv.style.height = size.height + "px"
squareDiv.style.width = size.width + "px"    //defines pixels of square
squareDiv.style.backgroundColor = "#07f50f"

function increase() {  //increases size of square by 10% each time it's clicked
    size.height = size.height * 1.1
    size.width = size.width * 1.1
    squareDiv.style.height = size.height * 1.1 + "px"
    squareDiv.style.width = size.width * 1.1 + "px"
}