//2 - Reverse Tennis (?)

//Create two objects with properties for the x, y, width, and height for a 'tall' rectangle. Set their 'x' properties so that when drawn, one will appear on the left side of the composition, and the other on the right side.


//In the draw function,

//draw both of the rectangles in the objects to the screen, based on their properties
//if the up key is pressed, make the first object move up, and the second object move down
//if the down key is pressed, make the first object move down, and the other object move up

//if (keyIsDown(UP_ARROW)) {
//change properties
//}

let rectangleLeft = { //sets attributes for the left paddle
    width: 50,
    height: 200,
    x: 50,
    y: 350,
}

let rectangleRight = { //sets attributes for the right paddle
    width: 50,
    height: 200,
    x: 1000,
    y: 350,
}

function setup() { //creates the canvas
    createCanvas(1920, 920)
}

function draw() {
    background("#829"); //sets the background to a nice purple color
    if (keyIsDown(UP_ARROW)) { //sets up keyIsPressed function using up arrow key
        rectangleLeft.y = rectangleLeft.y + 10 //moves left paddle down 10px
        rectangleRight.y = rectangleRight.y - 10 //moves right paddle up 10px

        if (keyIsDown(UP_ARROW) == false && keyIsDown(DOWN_ARROW) == false) {
            //creates a boolean operator for the function
        }

    }
    if (keyIsDown(DOWN_ARROW)) { //sets up keyIsPressed function using down arrow key
        rectangleLeft.y = rectangleLeft.y - 10 //moves left paddle up 10px
        rectangleRight.y = rectangleRight.y + 10 //moves right paddle down 10px

    }
    rect(rectangleLeft.x, rectangleLeft.y, rectangleLeft.width, rectangleLeft.height) //sets the normal characteristics for the left paddle
    rect(rectangleRight.x, rectangleRight.y, rectangleRight.width, rectangleRight.height); //sets the normal characteristics for the right paddle
}