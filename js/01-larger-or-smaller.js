function largeOrSmall (firstNum, secNum) {
    if (firstNum === secNum) {
        return secNum
    }
    if (firstNum < secNum) {
        return secNum
    } 
    else {
        return firstNum
    }
}

let numOne = parseInt(prompt("give me a number please"))
let numTwo = parseInt(prompt("give me another number please"))

let result = largeOrSmall(numOne, numTwo)
document.write(result)