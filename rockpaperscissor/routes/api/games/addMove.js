const game = require('../../../modules/game');

function addMove(req, res) {
    var userName = req.body.name;
    var userMove = String(req.body.move).toLowerCase();
    if (userMove === 'rock' || userMove === 'paper' || userMove === 'scissors') {
        if (userName === game.playerOne) {
            game.playerOneMove = userMove;
            return res.send("Player One: " + game.playerOne + '\n' + "Move: " + game.playerOneMove);
        } else if (userName === game.playerTwo) {
            game.playerTwoMove = userMove;
            return res.send("Player Two: " + game.playerTwo + '\n' + "Move: " + game.playerTwoMove);
       }
    } else {
        return res.send("Incorrect move.");
    }  
}

module.exports = addMove;