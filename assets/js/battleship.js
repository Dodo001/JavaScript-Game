//declaring our variables for the game
var randomLoc, location1, location2, location3, guess, hits, guesses, isSunk, stats;

//The locations of each of the the battleship on the grid
randomLoc = Math.floor(Math.random() * 5);
location1 = randomLoc;
location2 = location1 + 1;
location3 = location2 + 1;

//No hits and guesses at the beginning and guess is undefined
hits = 0;
guesses = 0;

//Initially, none of the battleship is sunk
isSunk = false;

/*The game's logic to tell the user to shoot, and what happens
if he misses or hits the target*/
while (isSunk == false) {
	guess = prompt("Ready, aim, fire! (enter a number 0 - 6):");
	if (guess < 0 || guess > 6) 
	{
		alert("please, enter a valid number");
	} 
	else 
	{
		guesses = guesses + 1;

		if (guess == location1 || guess == location2 || guess == location3)
		{
			alert("HIT");

			hits = hits + 1;

			if (hits == 3) 
			{
				isSunk = true;
				alert("You sank my battleship!");
			}
		}
		else
		{
			alert("MISS");
		}
	}

	// isSunk = true;
}

//Display of stats for the user accuracy and number of guesses
stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);
alert(stats);