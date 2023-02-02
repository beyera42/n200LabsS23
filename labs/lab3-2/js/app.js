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
    let noRed = removeRed(color(170, 200, 150));
    circle(300, 300, 200)
    fill(noRed);
}
function removeRed(red) {
    red.setRed(0)
    return red
}