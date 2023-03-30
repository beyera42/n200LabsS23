/*Cleanup

Make a function that takes a string, and removes every instance of "#" from the string, and returns the "cleaned up" version without the hashtags/octothorpes. 

Write a web page to test the function - one button and input, and one div. When the button is pressed, take the input, use the function to remove the hashtags, and show the result string on the page.*/
let userText = document.getElementById("textField")
let stringClear = document.getElementById("stringClear")
function octothorpe(char) {
    return char.includes("#");
    //if (char == "#") { return true; }
    //return false;
}

function octocide() {
    let inputText = (userText.value)
    result = inputText;
    while (octothorpe(result) == true) { result = result.replace("#", "") }
    stringClear.innerHTML = result;
    console.log(result)
}