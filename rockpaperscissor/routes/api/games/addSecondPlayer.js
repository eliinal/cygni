var express = require('express');
var addFirst = require('./addFirstPlayer');
// add an instance of game here and save second user data
const game = require('../../../modules/game');

function addSecondPlayer(req, res) {
    const name = req.body.name;
    var gId = req.params.id;
    
    if (gId === game.id) {
        game.playerTwo = name
    }
    const secondUser = {
        gId: gId,
        name: name
    }
    console.log("Player " + name + " joined the game.");
    return res.send(game);
}

module.exports = addSecondPlayer;