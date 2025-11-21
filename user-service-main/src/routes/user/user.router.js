const express = require('express');
const { httpGetAllUsers, httpGetUserStats } = require('./user.controller');

const UserRouter = express.Router();


UserRouter.get('/', httpGetAllUsers);


UserRouter.get('/stats', httpGetUserStats);

module.exports = UserRouter;