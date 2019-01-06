/**
 * /routes/api/index.js
 * @description: Index file for the api sub-application. 
 * All routes with "/api" comes through here.
 */

 const ApiRouter = require('express').Router();

 ApiRouter.use('/games', require('./games'));

 module.exports = ApiRouter;