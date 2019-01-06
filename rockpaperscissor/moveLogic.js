var express = require('express');

// logic for which player wins, e.g. scissor beats paper etc.

function moveLogic(move) {
    // paper beats rock, scissor beats paper, rock beats scissor
    switch(String(move.type).toLowerCase()) {
        case 'rock':
            move.type = 'rock';
            move.win = 'scissors';
            move.lose = 'paper';
            break;
        case 'paper':
            move.type = 'paper';
            move.win = 'rock';
            move.lose = 'scissors';
            break;
        case 'scissors':
            move.type = 'scissors';
            move.win = 'paper';
            move.lose = 'rock';
            break;
        default:
            move.type = '';
            move.win = '';
            move.lose = '';        
    }
}

module.exports = moveLogic;