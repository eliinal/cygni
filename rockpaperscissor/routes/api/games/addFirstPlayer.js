module.unique_debug = true;
var uniqid = require('uniqid');
const game = require('../../../modules/game');

function addUser(req, res) {
    const name = req.body.name;
    game.id = uniqid();
    game.playerOne = name;
    return res.send('Id: ' + game.id + '\n' + 'Player One: ' + game.playerOne);
}

module.exports = addUser;