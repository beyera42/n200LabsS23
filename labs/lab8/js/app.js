/*Is Divisible By Seven
Create an application that with an input and a button. When the user clicks on the button, update a div on the page to tell the user if what the user typed into the input is divisible by 7 or not. Use a separate function from the onclick function to discern if it is divisible. This function should return either true if it is divisible  or false if it is not.*/

let userNumber = document.getElementById("numField")

function divideBySeven(i) {
    let result = i % 7

    if (result == 0) { return true; }
    return false;
}

function isDivisible() {
    let i = Number(userNumber.value)

    output.innerHTML = divideBySeven(i)

    console.log(divideBySeven(i))
}