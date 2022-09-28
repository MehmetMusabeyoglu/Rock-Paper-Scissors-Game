alert("Welcome to the our game.");

var part1 = prompt("Your turn! Enter 'R' for 'Rock', 'P' for 'Paper' or 'S' for 'Scissors'. ");

function YouPicked (part1) {
if (part1 === "R") {
    alert("You selected 'ROCK'.");
}
else if (part1 === "P") {
    alert("You selected 'PAPER'.");
}
else if (part1 === "S") {
    alert("You selected 'SCISSORS'.");
}
else {
    alert("TRY AGAIN! YOU MUST ENTER AN 'R', 'P' or 'S' .");
}
}

YouPicked(part1);

confirm("Now it is the computer turn! Let's see who wins!!");

// confirm("The computer chose " + computerChoice);//

function whoWon() {

    var options = ['R', 'P', 'S'];

    var computerChoice = options[Math.floor(Math.random() * options.length)];

    if (part1 == "R" && computerChoice == "P") {
        alert("Computer chose " + computerChoice + ". Computer wins!!");
    } 
    
    if (part1 == "R" && computerChoice == "S") {
        alert("Computer chose " + computerChoice + ". You win!!");
    }

    if (part1 == "P" && computerChoice == "R") {
        alert("Computer chose " + computerChoice + ". You win!!");
    }

    if (part1 == "P" && computerChoice == "S") {
        alert("Computer chose " + computerChoice + ". Computer wins!!");
    }

    if (part1 == "S" && computerChoice == "R") {
        alert("Computer chose " + computerChoice + ". Computer wins!!");
    }

    if (part1 == "S" && computerChoice == "P") {
        alert("Computer chose " + computerChoice + ". You win!!");
    }
    
    if (part1 == computerChoice) {
        alert("Computer chose " + computerChoice + ". Tie!");
    }
}

whoWon();

