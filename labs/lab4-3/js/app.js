//3 - Bouncing Ball / World Wrap Refactor

//Take your ball bounce or world wrap assignment and recode it using an object to store the ball's size, color, and velocity. No global variables or hardcoded values should be used in your update function.

//I really wish I had done "ball bounce" or "world wrap", because that would've made this easier.

let ball = { //sets attributes for ball
    y: 300,
    radius: 100,
    color: "#099"
}

let x = 0 //sets initial position for ball

function setup() {
    createCanvas(800, 600) //creates a canvas
}

function draw() {
    background("#182") //turns the background a natural green
    circle(x, ball.y, ball.radius) //draws a circle using attributes from ball
    fill(ball.color) //fills circle with the color from ball
    x = x + 5
    console.log(x) //shifts the x-position of the ball 5 px to the right with each update

    if (x > 800) {
        x = 0 //sets x-position of ball to 0 when it reaches the edge of the canvas
    }
}