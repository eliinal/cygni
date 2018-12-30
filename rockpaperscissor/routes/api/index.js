/**
 * /routes/api/index.js
 * @description: Index file for the API sub-application. 
 * All routes with "/api" comes through here.
 */

 const ApiRouter = require('express').Router();

 // Insert route handlers here
 ApiRouter.use('/games', require('./games'));

 module.exports = ApiRouter;