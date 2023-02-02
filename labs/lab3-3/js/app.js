//Polar Points

//Polar coordinates are coordinates on a circle, rather than on a cartesian grid. They can be calculated by taking the sin and cosine of a number. For this exercise, you will write a function that calculates polar coordinates and returns a value that will be used to draw a circle at those coordinates.

//For this exercise

//In addition to your setup() and draw() calls, add a new function named polarPoint()
//Add one argument to polar point (r)
//In the polar point function, create an x variable and set it to r * Math.sin(mouseX);
//Create a Y variable, set it to the result of r * Math.cos(mouseX);
//Finally, at the end of the function, write return createVector(x,y);
//To test this function:

//Set a variable (perhaps res) equal to the result of calling polarPoint() in your draw call
//Add a translate(100,100); line before your drawing methods
//Draw a circle at res.x, res.y, and with a radius of 10.
//(res is technically an 'object', which we will learn more about next week)
function setup() {
    createCanvas(600, 600) //sets up a canvas
    background(255, 0, 255) //turns the background to magenta
}
function draw() {
    var res = polarPoint(80) //sets the radius of the function to 80 px
    translate(300, 300) //places the function at the center of the canvas
    circle(res.x, res.y, 20) //creates a shape that follows the function

    function polarPoint(r) {
        let x = r * Math.sin(mouseX) //sets x to follow the x position of the mouse and translate that into a position with the sin functions
        let y = r * Math.cos(mouseX) //sets y to follow the x position of the mouse and translate that into a position with the cos functions
        return createVector(x, y) //creates the vector
    }
}