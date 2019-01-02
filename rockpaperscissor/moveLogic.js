var express = require('express');

//const game = require('./modules/game');
//const move = require('./modules/move');

// logic for which player wins, e.g. scissor beats paper etc.

function moveLogic(move) {
    // paper beats rock, scissor beats paper, rock beats scissor
    switch(move.type) {
        case 'rock':
            move.win = 'scissor'
            move.lose = 'paper'
            break;
        case 'paper':
            move.win = 'rock'
            move.lose = 'scissor'
            break;
        case 'scissor':
            move.win = 'paper'
            move.lose = 'rock'
            break;
        default:
            move.win = ''
            move.lose = ''        
    }
}

module.exports = moveLogic;