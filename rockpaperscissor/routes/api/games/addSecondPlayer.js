var express = require('express');
var addFirst = require('./addFirstPlayer');
// add an instance of game here and save second user data
const game = require('../../../modules/game');

function addSecondPlayer(req, res) {
    const name = req.body.name;
    var gId = req.params.id;
    
    if (gId === game.id) {
        game.playerTwo = name
        console.log('Id: ' + game.id + ' Player One: ' + game.playerOne + ' Player Two: ' + game.playerTwo);
        return res.send(game.id + game.playerOne + game.playerTwo);
    }
    else {
        msg = "No game exists with that id";
        return res.send(msg);
    }
    
}

module.exports = addSecondPlayer;