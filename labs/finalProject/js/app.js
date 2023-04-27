/* Five Minutes with Objects

I am going to create a Five Nights At Freddy's style of game where the whole game is based on the camera view. All of the animatronics are now simple objects. Because you shouldn't be able to see the full map in this game, I want to make an overlay over the map object with several different objects that when the mouse hovers over them, it reveals the map underneath, but also a potential "animatronic"

You have protection. There are two buttons that activate doors on either side of you. When you press a button, the "door" will turn yellow, but it will start draining more power. Usually, when not using anything, the power goes down by 1 every 10 seconds and starts at 100. If you have a door down, it starts going down every 8 seconds. If you have both doors down, it goes down every 5 seconds. Uncovering areas of the map will not cost any power

All animatronics are set to a difficulty of 5. There will be a function for every animatronic where if their difficulty is greater than a randomly generated number that generates every 5 seconds, the animatronic moves to the next available area. They will follow a specific path that goes directly towards the office except for one. The rectangle object is the stand in for Foxy, and runs on the same randomly generated number, but instead of moving around, the object's color will be black until the number generator pulls a number lesser than the difficulty setting, the color becomes more visible, at least +85 to red each time. When the red value reaches 255, the rectangle moves into position, and when you hover over the left hallway, it starts moving. If an animatronic gets you, the entire screen is filled with the color of that object and the game resets.*/

let start = document.getElementById("start")

let map = document.getElementById("map")

var door1 = document.getElementById("door1")

var door2 = document.getElementById("door2")

clock = document.getElementById("clock")

power = document.getElementById("power")

var door1open = true

var door2open = true

var min = 6

var pow = 100

var box, circle, oval, rectangle, you;

var boxPositions = [
    { top: "230px", left: "275px" }, { top: "340px", left: "242px" }, { top: "490px", left: "222px" }, { top: "600px", left: "222px" }, { top: "595px", left: "307px" }
]

var circlePositions = [
    { top: "230px", left: "322px" }, { top: "220px", left: "80px" }, { top: "250px", left: "585px" }, { top: "340px", left: "322px" }, { top: "600px", left: "396px" }, { top: "595px", left: "307px" }
]

var ovalPositions = [
    { top: "230px", left: "375px" }, { top: "340px", left: "412px" }, { top: "490px", left: "392px" }, { top: "580px", left: "382px" }, { top: "590px", left: "307px" }
]

var rectanglePositions = [
    { backgroundColor: "#330000", top: "370px", left: "180px" }, { backgroundColor: "#660000", top: "370px", left: "180px" }, { backgroundColor: "#990000", top: "370px", left: "180px" }, { backgroundColor: "#cc0000", top: "550px", left: "223px" }, { top: "595px", left: "292px" },
]

var boxIndex = 0;

var circleIndex = 0;

var ovalIndex = 0;

var rectangleIndex = 0;

function go() {
    box = document.createElement("div")
    box.style.width = "35px"
    box.style.height = "35px"
    box.style.backgroundColor = "#61469c"
    box.style.border = "2px solid"
    box.style.position = "absolute"
    box.style.top = "160px"
    box.style.left = "270px"
    document.body.appendChild(box)
    circle = document.createElement("div")
    circle.style.borderRadius = "20px"
    circle.style.width = "35px"
    circle.style.height = "35px"
    circle.style.backgroundColor = "#73562d"
    circle.style.border = "2px solid"
    circle.style.position = "absolute"
    circle.style.top = "160px"
    circle.style.left = "322px"
    document.body.appendChild(circle)
    oval = document.createElement("div")
    oval.style.borderRadius = "15px"
    oval.style.width = "35px"
    oval.style.height = "25px"
    oval.style.backgroundColor = "#adc90e"
    oval.style.border = "2px solid"
    oval.style.position = "absolute"
    oval.style.top = "165px"
    oval.style.left = "375px"
    document.body.appendChild(oval)
    rectangle = document.createElement("div")
    rectangle.style.width = "35px"
    rectangle.style.height = "25px"
    rectangle.style.backgroundColor = "#000000"
    rectangle.style.border = "2px solid"
    rectangle.style.position = "absolute"
    rectangle.style.top = "370px"
    rectangle.style.left = "180px"
    document.body.appendChild(rectangle)
    you = document.createElement("div")
    you.style.borderRadius = "20px"
    you.style.width = "25px"
    you.style.height = "25px"
    you.style.backgroundColor = "#FFFFFF"
    you.style.border = "2px solid"
    you.style.position = "absolute"
    you.style.top = "596px"
    you.style.left = "312px"
    document.body.appendChild(you)
    setInterval(tick, 10000);
    clock.innerHTML = "Time: " + min + ":00"
    setInterval(tock, 60000);
    power.innerHTML = "Power: " + pow + "%"
    setInterval(volt, 8000)
}

function leftdoor() {
    if (door1open == true) {
        door1open = false
        door1.style.backgroundColor = "#E00000"
    }
    else {
        door1open = true
        door1.style.backgroundColor = "#00E000"
    }
}

function rightdoor() {
    if (door2open == true) {
        door2open = false
        door2.style.backgroundColor = "#E00000"
    }
    else {
        door2open = true
        door2.style.backgroundColor = "#00E000"
    }
}

function tick() {
    var randNumA = Math.random()
    if (randNumA < .35) {
        if (boxIndex == boxPositions.length - 1) {

            if (door1open == false) {
                boxIndex = 0;
            }
            else {
                console.log(boxIndex, door1open)
                gameover()
            }
        }
        box.style.top = boxPositions[boxIndex].top
        box.style.left = boxPositions[boxIndex].left
        box.style.backgroundColor = boxPositions[boxIndex].backgroundColor
        boxIndex++
    }
    var randNumB = Math.random()
    if (randNumB < .35) {
        if (circleIndex == circlePositions.length - 1) {

            if (door2open == false) {
                circleIndex = 0;
            }
            else {
                console.log(circleIndex, door2open)
                gameover()
            }
        }
        circle.style.top = circlePositions[circleIndex].top
        circle.style.left = circlePositions[circleIndex].left
        circle.style.backgroundColor = circlePositions[circleIndex].backgroundColor
        circleIndex++
    }
    var randNumC = Math.random()
    if (randNumC < .35) {
        if (ovalIndex == ovalPositions.length - 1) {

            if (door2open == false) {
                ovalIndex = 0;
            }
            else {
                console.log(ovalIndex, door2open)
                gameover()
            }
        }
        oval.style.top = ovalPositions[ovalIndex].top
        oval.style.left = ovalPositions[ovalIndex].left
        oval.style.backgroundColor = ovalPositions[ovalIndex].backgroundColor
        ovalIndex++
    }
    var randNumD = Math.random()
    if (randNumD < .35) {
        if (rectangleIndex == rectanglePositions.length - 1) {

            if (door1open == false) {
                rectangleIndex = 0;
            }
            else {
                console.log(rectangleIndex, door1open)
                gameover()
            }
        }
        rectangle.style.top = rectanglePositions[rectangleIndex].top
        rectangle.style.left = rectanglePositions[rectangleIndex].left
        rectangle.style.backgroundColor = rectanglePositions[rectangleIndex].backgroundColor
        rectangleIndex++
    }


};
function gameover() {
    let messageA = "Game Over. Reset to try again"
    alert(messageA);
    location.reload();
}
function tock() {
    min = min - 1
    clock.innerHTML = "Time: " + min + ":00"
    if (min == 0)
        youwin()
}
function youwin() {
    let messageB = "Congratulations, you win! You're really good at this game, huh? Click OK to try again."
    alert(messageB);
    location.reload();
}
function volt() {
    pow = pow - 1
    power.innerHTML = "Power: " + pow + "%"
    if (door1open == false) {
        pow = pow - 1
    }
    if (door1open == true) {
        pow = pow
    }
    if (door2open == false) {
        pow = pow - 1
    }
    if (door2open == true) {
        pow = pow
    }
    if (pow == 0)
        gameover()
}