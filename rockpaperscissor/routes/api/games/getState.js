var express = require('express');

const gameLogic = require('../../../gameLogic');
const game = require('../../../modules/game');

function getState(req, res) {
    var name = req.body.name;
    var id = req.params.id;

    if (id === game.id) {
        gameState = gameLogic(game);
    }
    
    if (name === game.playerOne) {
        var move = game.playerOneMove;
    } else {
        var move = game.playerTwoMove
    }

    return res.send(gameState)
}

module.exports = getState;