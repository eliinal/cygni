var express = require('express');

function game(id, playerOne, playerOneMove, playerTwo, playerTwoMove, state) {
    this.id = id,
    this.playerOne = playerOne,
    this.playerOneMove = playerOneMove,
    this.playerTwo = playerTwo,
    this.playerTwoMove = playerTwoMove,
    this.state = state;
}

module.exports = game;