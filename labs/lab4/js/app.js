//1 - Data-driven display w/ function

//Make an object with all the properties for a graphic on the screen - width, height, color, position. These numbers could represent positions of wheels, eye colors, or rainbow lengths. In your create or draw function draw that object to the screen using the data in your object - using a series of fill commands, draw commands, and whatever else you need to draw the object to the screen. Try to not hard-code any numbers in the drawing commands - only use the object properties to set sizes, colors, or position.

//The, create a function that takes one argument and draws an object to the screen using that object argument. Pass your object to that function as an argument, and have the function draw the object to the screen. An example function is below:

//function drawRocket(rocketObject) {
//rect(rocketObject.x, rocketObject.y, rocketObject.width, rocketObject.height);
//}
var rocketObject = { //setting up attributes for rocketObject
    width: 100,
    height: 200,
    x: 225,
    y: 275,
    color: "#92c5e0",
}

function setup() { //makes the canvas
    createCanvas(600, 700)
}

function draw() { //draws rocketObject and fill background in with a teal color
    background(43, 170, 208)
    drawRocket(rocketObject)
}

function drawRocket(rO) {
    fill(rO.color) //fills drawing with color from variable
    ellipse(rO.x, rO.y - 50, rO.width, rO.height); //creates ellipse top using attributes from variable
    rect(rO.x - 100, rO.y + 70, rO.width / 2, rO.height / 2); //creates the left thruster using attributes from variable
    rect(rO.x - 50, rO.y - 50, rO.width, rO.height); //creates the rocket hull using attributes from variable
    rect(rO.x + 50, rO.y + 70, rO.width / 2, rO.height / 2); //creates right thruster using attributes from variable
    circle(rO.x, rO.y, rO.width / 2, rO.height / 4); //creates ship window using attributes from variable
}

/*function rocketObject() {
    rect(mouseX, mouseY, 150, 200)
} */

