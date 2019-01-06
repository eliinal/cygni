var express = require('express');
var router = express.Router();

const game = require('../../../modules/game');

/* Make a move. Submit name and move in the request-body */

function addMove(req, res) {
    var userName = req.body.name;
    var userMove = String(req.body.move).toLowerCase();
    if (userMove.includes('rock') || userMove.includes('paper') || userMove.includes('scissors')) {
        if (userName === game.playerOne) {
            game.playerOneMove = userMove;
            return res.send("Player One: " + game.playerOne + '\n' + "Move: " + game.playerOneMove + '.');
        } else if (userName === game.playerTwo) {
            game.playerTwoMove = userMove;
            return res.send("Player Two: " + game.playerTwo + '\n' + "Move: " + game.playerTwoMove + '.');
       }
    } else {
        return "Incorrect move.";
    }  
}

module.exports = addMove;