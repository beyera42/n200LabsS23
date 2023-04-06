/*Make Divs

Given the array

let objects = [

 { color: "#FF0000", height: 100, width: 300 },

 { color: "#FFFF00", height: 200, width: 200 },

 { color: "#ff0000", height: 300, width: 100 },

];

Write a loop that creates three divs based on the data in the array. You should only have one document.createElement in your code.*/
let i = 0;

let objects = [

    { color: "#FF0000", height: 100, width: 300 },

    { color: "#FFFF00", height: 200, width: 200 },

    { color: "#ff0000", height: 300, width: 100 },

];
// document.appendChild(nwel)

function divstruct() {
    for (i = 0; i < 3; i++) {
        let nwel = document.createElement("div");
        nwel.style.backgroundColor = objects[i].color    //the function creates the 3 divs based on the data found within the array seen above while using a for loop to limit it to 
        nwel.style.height = objects[i].height + "px"     //the number of variables in the array
        nwel.style.width = objects[i].width + "px"
        document.body.appendChild(nwel)
    }
}
