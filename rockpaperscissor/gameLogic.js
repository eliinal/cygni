var express = require('express');

const Move = require('./modules/move');
const moveLogic = require('./moveLogic');

function gameLogic(game) {
    const firstMove = new Move();
    firstMove.type = game.playerOneMove;
    const secondMove = new Move();
    secondMove.type = game.playerTwoMove;

    moveLogic(firstMove);
    moveLogic(secondMove);

    if (firstMove.win === secondMove.type) {
        return "Player " + game.playerOne + " wins!"
    } else if (firstMove.lose === secondMove.type) {
        return "Player " + game.playerTwo + " wins!"
    } else {
        return "It's a draw!"
    }
}
module.exports = gameLogic;