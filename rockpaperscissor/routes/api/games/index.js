/**
 * /routes/api/games/index.js
 */
const express = require('express');
const GameRouter = express.Router();

//const start = require('./start.js');
//onst show_game = require('./show_game.js');
const join = require('./addSecondPlayer.js');
const id = require('./addFirstPlayer.js');

//GameRouter.route('/').post(start);
GameRouter.route('/').post(id);
//GameRouter.route('/:id').get(show_game);
GameRouter.route('/:id/join').post(join);
//GameRouter.route('/:id/move').post(move);

module.exports = GameRouter;