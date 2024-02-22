let randomNum = Math.round(Math.random());
let coinFlip = randomNum;
let choice = prompt("Select 'Heads' or 'Tails'");

if (coinFlip < 1) {
    coinFlip = "heads"
    if (choice == "Heads") {
        window.alert("The flip was " + coinFlip + " and you chose heads...you win!")
    }
    else {
        window.alert("The flip was " +  coinFlip + " but you chose tails...you lose!")
    }
}
else {
    coinFlip = "tails"
    if (choice == "Heads") {
        window.alert("The flip was " + coinFlip + " but you chose heads...you lose!")
    }
    else {
        window.alert("The flip was " + coinFlip + " and you chose tails...you win!")
    }
}

