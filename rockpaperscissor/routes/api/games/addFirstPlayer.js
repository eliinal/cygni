var express = require('express');
var router = express.Router();
// Enable debug messages
module.unique_debug = true;
// Require the module
var uniqid = require('uniqid');
// add an instance of game here and save user data

/* Initialize a new game of Rock, Paper & Scissors, 
retrieves a game-ID from the server */

function addUser(req, res) {
    const name = req.body.name;
    const firstUser = {
        gId: uniqid(),
        name: name
    }
    console.log(firstUser);
    return res.send(firstUser);
}

module.exports = addUser;