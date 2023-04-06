/*Its just average

Create an application that:

Takes in a list of comma-separated numbers from the user
Splits that list into an array of numbers
Converts the string version of the numbers into number versions
Loops through the array and sums up the values
Calculates the average of the array
Displays to the user
The average
The sum
Removes the text from the input so the user can type in new numbers*/

let response = document.getElementById("response") // the "avg" responder

let aresponse = document.getElementById("aresponse") // the "sum" responder

let huh = document.getElementById("que").value // the button's function

function elo() {
    let que = document.getElementById("que").value
    console.log(que)
    console.log(que.value);
    let splitter = que.split(",");
    console.log(splitter)
    let i = 0
    let sum = 0
    let myArray = (splitter)
    while (i < myArray.length) {
        let num = Number(myArray[i])
        // let num = number(splitter[i]);
        // let itemAtIndex = myArray[i];
        sum += num;
        i++

        average = sum / myArray.length
    }
    console.log(sum)
    console.log(average)
    response.innerHTML = average + ": avg"
    aresponse.innerHTML = sum + ": sum"
}