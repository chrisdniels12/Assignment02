let numRangeVal = parseInt(prompt("Enter a number between 1 and 100"));

while (numRangeVal < 1 || numRangeVal > 100 || isNaN(numRangeVal)) {
    console.warn("only numbers between 1 and 100 are accepted.")
    numRangeVal = parseInt(prompt("Enter a number between 1 and 100"));
} 
if (numRangeVal >= 60 && numRangeVal <= 69) {
    console.log("You received a D")
} else if (numRangeVal >= 70 && numRangeVal <= 79) {
    console.log("You received a C")
} else if (numRangeVal >= 80 && numRangeVal <= 89) {
    console.log("You received a B")
} else if (numRangeVal >= 90 && numRangeVal <= 100) {
    console.log("You received an A")
} else {
    console.log("You received an F")
}