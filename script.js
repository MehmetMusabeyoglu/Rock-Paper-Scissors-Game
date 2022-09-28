alert("Welcome to the our game.");

let part1=prompt("Your turn! Enter 'R' for 'Rock', 'P' for 'Paper' or 'S' for 'Scissors'. ");
if (part1==="R"){
    alert("You selected 'ROCK'.");
}
else if(part1==="P"){
    alert("You selected 'PAPER'.");
}
else if(part1==="S"){
    alert("You selected 'SCISSORS'.");
} 
else{
    alert("TRY AGAIN! YOU MUST ENTER AN 'R', 'P' or 'S' .");
}

confirm("Now it is the computer turn! Hit 'OK' to continue.");

var options = ['R', 'P', 'S'];

var computerChoice = options[Math.floor(Math.random() * options.length)];

confirm("The computer chose " + computerChoice);

function whoWon (part1, computerChoice) {

    if (part1===computerChoice) {
        return "Tie!"
    }
    
    if (part1 === "R" && computerChoice === "P") {
                return "Computer wins!!"
            }

            else if (part1 === "R" && computerChoice === "S") {
                return "You win!!"
            }

            else if (part1 === "P" && computerChoice === "R") {
                return "You win!!"
            }

            else if (part1 === "P" && computerChoice === "S") {
                return "Computer wins!!"
            }

            else if (part1 === "S" && computerChoice === "R") {
                return "Computer wins!!"
            }

            else if (part1 === "S" && computerChoice === "P") {
                return "You win!!"
            }
}

confirm (whoWon);
