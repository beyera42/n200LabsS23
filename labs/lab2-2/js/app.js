r = 1

function setup() {
    createCanvas(400, 300) //Sets width of canvas to 400px and height to 300px
    background(0, 200, 200) //Sets color of canvas to an aquamarine/teal color
}
function draw() {
    circle(200, 150, r)
    fill(100, 200, 100)
    stroke(0, 255, 0)
    if (true) {
        r++;
    }
    console.log(r);
    if (r > 200)

        r = 1
}