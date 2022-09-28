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

alert("")