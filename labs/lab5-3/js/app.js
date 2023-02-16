/* McDiv'ns

Put a div on the page. When the div is clicked, append the text "mc" to whatever is in its innerHTML. After 3 clicks, the div will show "mcmcmc" */

let mcdDiv = document.getElementById("mcd") //grabs the id for mcd

var size = {
    height: 100,  //defines the starting size of mcd
    width: 100
}

mcdDiv.style.height = size.height + "px"
mcdDiv.style.width = size.width + "px"    //defines the pixels of mcd
mcdDiv.style.backgroundColor = "#fa020f"

function change() {
    mcdDiv.innerHTML += "mc"  //uses innerHTML to display "mc" when variable mcd is clicked
}