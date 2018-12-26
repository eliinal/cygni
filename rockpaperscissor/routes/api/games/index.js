/**
 * /routes/api/games/index.js
 */

const GameRouter = require('express').Router();

const start = require('start.js');
const id = require('id.js');
const show_game = require('show_game.js');
const join = require('join.js');

GameRouter.route('/')
    .post(start);
GameRouter.route('/id')
    .get(id);
GameRouter.route('/:id')
    .get(show_game);
GameRouter.route('/:id/join')
    .get(join);
GameRouter.route('/:id/move')
    .post(move);

module.exports = GameRouter;