//Date:1/19/2023, Name: Alex Beyer, Class #: N220

//setup area
function setup() {
    //background shape and color
    createCanvas(1600, 1200);
    background(222, 205, 106);
    //color settings
    fill(84, 55, 33); //changes shape's color
    stroke(186, 13, 13); //change's outline's color
    //shape settings
    rect(430, 650, 100, 120);//a rectangle at x=430, y=650, with a length of 100 px and a height of 120 px.
    let message;
    message = 'huh? who me? lost? no.';

    alert(message);  //The webpage will say "huh? who me? lost? no."
    ellipse(700, 350, 200, 165); //an ellipse at x=700, y=350, with a length of 200 px and a height of 165 px
    rect(250, 300, 250, 300); //a rectangle at x=250, y=300, with a length of 250 px and a height of 300 px
    translate(1080, 600); //i found a piece of code online that makes a really cool looking flower design. i took the code and tried to make it an asterisk from what I could understand.
    noStroke();
    for (let i = 0; i < 10; i++) {
        rect(-10, 0, 20, 80);
        rotate(PI / 2.5);
    }
}
//draw area
function draw() {
    stroke(186, 13, 13) //color of outline
    circle(mouseX, mouseY, 20) //a circle with the radius of 20 px that follows the position of the mouse
    triangle(mouseX, mouseY, 800, 600) //an approximate triangulation of the circle code from x=800, y=600
    if (mouseIsPressed) {
        let message;
        message = 'YOU TOUCH ME?!?! No more fun for you';

        alert(message); //DO NOT TOUCH. It has been rigged to never leave the screen if you do so, so please don't touch
    }
}