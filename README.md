# Rock paper scissor
This application uses Node.js and Express.

To start the game, place yourself in the folder "rockpaperscissor" and write "npm start" to start.

The instructions are provided to test the application with Postman.

## Step 1
Start the game. Go to POST http://localhost:5012/api/games/ to write the first POST-request.

Submit the first player's name in the request-body like this:

{
    "name": "Lisa"
}

The header section in Postman now displays the game id and the first players name.

## Step 2
Ask another person to join the game. It is implied that the other player has received the game id, from the first player, through slack or a similar service. 

Use this id and go to 
POST http://localhost:5012/api/games/:id/join
to submit the second player's name in the request body.

{
    "name": "Pelle"
}

Now the Postman header section will display the game id, the first player's name as well as the second player's name.

## Step 3 & 4
The players make their moves, by going to POST http://localhost:5012/api/games/:id/move and sumbit their name and the chosen move in the request-body.

{
    "name": "Lisa/Pelle"
    "move": "rock/paper/scissor"
}

The move category is not case-sensitive. The player's name and the chosen move is displayed in the Postman header section. If the chosen move does not exist, the application will answer correspondingly.

## Step 5
After both players has placed their moves, anyone of them can check the state of the game by going to GET http://localhost:5012/api/games/:id.

The application will then answer if the first player or the second player won or if the game was a draw.

Additionally, it is also possible to check the state at any other time and the application will answer correspondingly.
 