/*Make Random

Create a function that generates and returns a random whole number between 0 and 10. 
Write a web page to test it by having a button that, when clicked runs a function that: - Uses that function to generate a random number. - Displays that number on the screen. Your final application should have two functions - one to make the random number, and one to handle the click.*/

function randomize() {
    let test = Math.floor(Math.random() * 10);

    console.log(test)
    return test;
}


function randomizer() {
    output.innerHTML = randomize()
}