var express = require('express');
// Enable debug messages
module.unique_debug = true;
// Require the module
var uniqid = require('uniqid');
// add an instance of game here and save user data
const game = require('../../../modules/game');
/* Initialize a new game of Rock, Paper & Scissors, 
retrieves a game-ID from the server */

function addUser(req, res) {
    const name = req.body.name;
    game.id = uniqid();
    game.playerOne = name;
    return res.send('Id: ' + game.id + '\n' + 'Player One: ' + game.playerOne);
}

module.exports = addUser;