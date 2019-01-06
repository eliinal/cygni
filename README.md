# Rock paper scissors
This application uses Node.js and Express.

To start the game, place yourself in the folder "rockpaperscissor" and write "npm start" to start.

The instructions are provided to test the application with Postman.

## Start the game
Enter POST http://localhost:5012/api/games/ in Postman to send the first POST-request.

Submit the first player's name in the request-body like this, by choosing the settings "raw" and "JSON (applciation/json)":

{  
    "name": "Lisa"  
}

The response from the server is now shown in header section in Postman. 

## Join the game
Ask another person to join the game. It is implied that the other player has received the game id, from the first player, through Slack or a similar service. 

Use this id and enter 
POST http://localhost:5012/api/games/:id/join
to submit the second player's name in the request body, with the same settings as the previous request.

{  
    "name": "Pelle"  
}

The response from the server is now shown in header section in Postman. 

## Make a move
The player make their move by entering POST http://localhost:5012/api/games/:id/move and submitting their name and the chosen move in the request-body. Same settings as previous request.

{  
    "name": "Lisa/Pelle"  
    "move": "rock/paper/scissor"  
}

The move category is not case-sensitive. The player's name and the chosen move is displayed in the Postman header section. If the chosen move does not exist, the application will answer accordingly.

## Check state
After both players have placed their moves, anyone of them can check the state of the game by entering GET http://localhost:5012/api/games/:id. Additionally, they need to enter their name in the request-body so the correct attributes are shown. Same settings as previous request.

{  
    "name": "Lisa/Pelle  
}

The server will then answer if the first player or the second player won or if the game was a draw.

Additionally, it is also possible to check the state at any other time and the application will answer accordingly.
 
