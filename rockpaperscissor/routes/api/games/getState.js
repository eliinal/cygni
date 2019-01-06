var express = require('express');

const gameLogic = require('../../../gameLogic');
const game = require('../../../modules/game');

function getState(req, res) {
    var name = req.body.name;
    var id = req.params.id;

    if (id === game.id) {
        gameState = gameLogic(game);
    }
    else {
        return res.send('This game has not yet been started. Wrong id.');
    }
    if (name === game.playerOne) {
        if (game.playerTwo === '') {
            return res.send('Player Two has not yet joined the game.');
        } else if(game.playerTwoMove === '') {
            return res.send(game.playerTwo  + 
            ' has not placed their move yet. You played ' + game.playerOneMove + '.');
        }
    } else if (name === game.playerTwo) {
        if(game.playerOneMove === '') {
            return res.send(game.playerOne  + 
            ' has not placed their move yet. You played ' + game.playerTwoMove + '.');
        } else if(game.playerTwoMove === '') {
            return res.send("You have not placed your move yet.");
        }
    } else {
        return res.send('That player does not play in this game.');
    }

    if (gameState === 1) {
        return res.send('The winner is ' + game.playerOne + '!');
    } else if (gameState === 2) {
        return res.send('The winner is ' + game.playerTwo + '!');
    } else {
        return res.send('It is a draw');
        }
    }

module.exports = getState;