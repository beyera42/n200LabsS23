function setup() {
    createCanvas(400, 300) //Sets width of canvas to 400px and height to 300px
    background(0, 200, 200) //Sets color of canvas to an aquamarine/teal color
    frameRate(60);
}

function draw() {
    console.log(frameRate())
    let rate = int(millis() / 60)
    textSize(24);
    fill(125, 125, 125)
    text("Frames: " + rate, 200, 150)

}