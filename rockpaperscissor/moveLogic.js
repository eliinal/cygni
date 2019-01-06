function moveLogic(move) {
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