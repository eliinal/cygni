var express = require('express');
var router = express.Router();
// add an instance of game here and save second user data

function addSecondPlayer(req, res) {
    const name = req.body.name;
    var gId = req.params.id;

    const secondUser = {
        gId: gId,
        name: name
    }
    console.log(secondUser);
    return res.send(secondUser);
}

module.exports = addSecondPlayer;