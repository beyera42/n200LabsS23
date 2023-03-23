/* 1) Greeter

Create an page with an input, and a button. When the button is clicked, output the phrase "Hello {Name}" to the developer console, with {Name} being the value the user put into the input field. */

function greet() {
    let helloDiv = document.getElementById("hello");
    let greetingButton = ("Hello " + helloDiv);
    console.log(greetingButton);
}