const express = require('express');
const userController = require('../controller/userController');

const { Register, Login } = userController;
const Router = express.Router();

Router.route('/register').post(Register);
Router.route('/login').post(Login);

module.exports = Router;