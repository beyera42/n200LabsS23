//Drawing Drawer

//Create a composition of some object - a car, a rocket, a set of keys.
//Move that composition code into a new function ("drawKeys()", for instance).
//Add two arguments to the function (x and y)
//Use those arguments to control the position of each of the drawing calls in the function (things like rect() and circle())
//Finally, either:
//Place the function call in the draw() function, and have your composition follow mouseX and mouseY
//Draw 3+ of your compositions in different spaces on the screen by writing your function call three or more times in either setup() or draw()
function setup() {
    createCanvas(600, 600) //creates the canvas

}
function draw() {
    background(64, 33, 3) //sets the background color
    teddy(mouseX, mouseY) //sets the shape being made to follow the mouse

}
function teddy(x, y) {
    circle(x, y, 100) //creates the body
    fill(156, 111, 0); //makes the color a shade of brown
    ellipse(x, y + 10, 50, 60) //creates body detail
    circle(x - 50, y - 10, 50) //creates left hand
    circle(x + 50, y - 10, 50) //creates right hand
    circle(x - 30, y + 50, 50) //creates left foot
    circle(x + 30, y + 50, 50) //creates right foot
    circle(x - 30, y - 80, 35) //creates left ear
    circle(x + 30, y - 80, 35) //creates right ear
    circle(x, y - 50, 75) //creates head
    ellipse(x, y - 35, 40, 30) //creates snout
    ellipse(x, y - 40, 20, 15) //creates nose
    circle(x - 20, y - 60, 10) //creates left eye
    circle(x + 20, y - 60, 10) //creates right eye
}