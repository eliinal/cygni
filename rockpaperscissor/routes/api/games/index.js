/**
 * /routes/api/games/index.js
 * @description: Index file for the games sub-application. 
 * All routes with "/games" comes through here. 
 */
const express = require('express');
const GameRouter = express.Router();

const join = require('./addSecondPlayer');
const id = require('./addFirstPlayer');
const move = require('./addMove');
const state = require('./getState');

GameRouter.route('/').post(id);
GameRouter.route('/:id').get(state);
GameRouter.route('/:id/join').post(join);
GameRouter.route('/:id/move').post(move);

module.exports = GameRouter;