//Write a function that

//takes a color as an argument ( you can use color(170, 200, 150) )
//sets the red component of that color to zero  ( colorVariableArgumentName.setRed(0) )
//Returns that new color without red
//Then, test this function by drawing a circle to the screen using the result. You might have something like:


//draw circle
function setup() {
    createCanvas(600, 600)
    background(0, 140, 26)

}
function draw() {
    let noRed = removeRed(color(170, 200, 150)); //sets up for the removal of the red values of the color
    circle(300, 300, 200) //creates a circle
    fill(noRed); //fills the circle with the "removeRed" function
}
function removeRed(red) {
    red.setRed(0) //sets the red value of the color to 0, or no red
    return red //ensures this function is successful
}