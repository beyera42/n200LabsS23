/*Function One - Identify Vowel
Write a function that takes one argument, and returns a true if that argument is a vowel, and false if it is not. ( "a" would return true, "H" would not). 
Use stringName.toLocalUppercase() to ensure its always an uppercase character you are comparing to.
( push goal - consider how this can be done with a loop )*/

function vowelIdentifier(char) {
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" ||) {
        return true;
    }

    return false;
}

console.log(isVowel("a"));
console.log(isVowel("b"));