/* 3 - Runner Up

Create an array with 3 "best times" (numbers). Write the array so the times in order, from lowest to highest.

Then, write the line of code that displays the runner-up times (second and third place) in two different divs. */
let firstDiv = document.getElementById("first") //fetches the id for "first"
let secondDiv = document.getElementById("second") //fetches the id for "second"
let thirdDiv = document.getElementById("third") //fetches the id for "third"

firstDiv.style.backgroundColor = ("#ffe042") //sets div color to yellow
secondDiv.style.backgroundColor = ("#bababa") //sets div color to grey
thirdDiv.style.backgroundColor = ("#b05800") //sets div color to brown

let runArray = [2.49, 2.63, 3.04] //sets values to the array
runArray[0]
firstDiv.innerHTML = runArray[0] //runs the first value of the array in the first div
runArray[1]
secondDiv.innerHTML = runArray[1] //runs the second value of the array in the second div
runArray[2]
thirdDiv.innerHTML = runArray[2] //runs the third value of the array in the third div
