var express = require('express');
var addFirst = require('./addFirstPlayer');
// add an instance of game here and save second user data
const game = require('../../../modules/game');

function addSecondPlayer(req, res) {
    const name = req.body.name;
    var gId = req.params.id;
    
    if (gId === game.id) {
        game.playerTwo = name
        return res.send('Id: ' + game.id + '\n' + 'Player One: ' + game.playerOne + '\n' + 'Player Two: ' + game.playerTwo);
    }
    else {
        return res.send("No game exists with that id");
    }
    
}

module.exports = addSecondPlayer;