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
        return 1; // Player One wins
    } else if (firstMove.lose === secondMove.type) {
        return 2; // Player Two wins
    } else {
        return 3; // Draw
    }
}
module.exports = gameLogic;