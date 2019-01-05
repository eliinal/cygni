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
        return "This game has not yet been started."
    }
    if (name === game.playerOne) {
        if (game.playerTwo === '') {
            return "Player Two has not yet joined the game."
        } else if(game.playerTwoMove === '') {
            return game.playerTwo  + 
            " has not placed their move yet. You played " + game.playerOneMove;
        }
    } else if (name === game.playerTwo) {
        if(game.playerOneMove === '') {
            return game.playerOne  + 
            " has not placed their move yet. You played " + game.playerTwoMove;
        }
    } else {
        return "That player does not play in this game.";
    }

    if (gameState === 1) {
        return "The winner is " + game.playerOne;
    } else if (gameState === 2) {
        return "The winner is " + game.playerTwo;
    } else {
        return "It's a draw!";
        }
    }
    
module.exports = getState;