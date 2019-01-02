var express = require('express');
var router = express.Router();

const game = require('../../../modules/game');

/* Make a move. Submit name and move in the request-body */

function addMove(req, res) {
    var userName = req.body.name;
    var userMove = req.body.move;
    if (userName === game.playerOne) {
        game.playerOneMove = userMove;
    } else if (userName === game.playerTwo) {
        game.playerTwoMove = userMove;
    }

    console.log("Player " + userName + " played " + userMove)
    return res.send(game);
}

module.exports = addMove;