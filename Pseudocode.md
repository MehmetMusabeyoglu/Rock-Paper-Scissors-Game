Prompt()

User enters R, P, or S
R signifies “Rock” 
P signifies “Paper” 
S signifies “Scissors” 

This value is stored in UserInput. 

Next Prompt() is a button the user clicks. 

When the user clicks that button the computer randomly selects R, P, or S. 

This value is stored in ComputerChoice

The output tells the user what it has selected. 

Next is an Alert() that tells the user who has won 

## Possible Combinations: 


			            Computer:

	                    R	P	S

                    R	RR	RP	RS

        User: 		P	PR	PP	PS

                    S	SR	SP	SS


## Rules: 

Paper beats Rock, Rock beats Scissor, Scissor beats Paper

## If /then statements

If UserInput = ComputerChoice, then output is “Tie!” 

If UserInput is “R” and  ComputerChoice is “P”, then output is “Computer wins!!” 

If UserInput is “R” and  ComputerChoice is “S”, then output is “You win!!” 

If UserInput is “P” and  ComputerChoice is “R”, then output is “You win!!” 

If UserInput is “P” and  ComputerChoice is “S”, then output is “Computer wins!!” 

If UserInput is “S” and  ComputerChoice is “R”, then output is “Computer wins!!” 
If UserInput is “S” and  ComputerChoice is “P”, then output is “You win!!” 

Prompt () 

Asks the user to play again, if select “Okay” then restart. 






