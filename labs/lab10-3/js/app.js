/* Flash Cards

An application with 3 buttons that ask questions. For instance, they might ask "What is the capital of Indiana?". Each button should have a data-answer attribute that lists the answer.

When a button is clicked, display the answer to the button's question in a div. Use only one function, and that function must make use of the button's data-attribute. */
let check = document.getElementById("correct")
function guess() {
    console.log(event.target.dataset.answer);
    correct.innerHTML = event.target.dataset.answer;
}