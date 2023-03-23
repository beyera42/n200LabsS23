/* 4) Distance Calculator

Create a page with four inputs, labeled x1, y1, x2, and Y2. Add one button labeled "calculate distance".
When the button is pressed, calculate the distance using the equation d = Math.sqrt( xDiff*xDiff + yDiff*yDiff); 
(xDiff and yDiff are the differences between the x points and y points, respectively)

The distance calculation MUST take place in a function that returns the value of the distance. */

function calc()
let d = Math.sqrt(xDiff * xDiff + yDiff * yDiff)
console.log(d)