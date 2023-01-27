//Date:1/26/2023, Name: Alex Beyer, Class #: N220

//Assignment: Animation and Conditional Operators Exercise

//1st Choice: Counter

//Create an application that outputs a number to the console every draw call of P5. This number should start at zero, and increase by one every frame.

//2nd Choice: Puck Side

//Canvas size: 400x300

//Create an application that draws a circle where the mouse is at. (Use  the P5 variables mouseX and mouseY for this). When the mouse is on the right half of the canvas, draw the circle in red. When the mouse is on the left side of the canvas, draw the circle in blue.
function setup() {
    createCanvas(400, 300) //Sets width of canvas to 400px and height to 300px
    background(0, 200, 200) //Sets color of canvas to an aquamarine/teal color
}

function draw() {
    circleo(mouseX, mouseY, 30)
}

function circleo(x, y) {
    if (x > 200) {
        fill(0, 0, 200)
    } else {
        fill(200, 0, 0)
    }

    noStroke()
    circle(x, y, 50)
}

//3rd Choice: Ever Larger, until not

//Create an application that draws a circle to the center of the screen every update frame, starting with a diameter of 1. Using a global variable, change increase the diameter of the circle by 1 every frame. Once the circle gets a diameter of 200, set its diameter back to 1.

//Operation
