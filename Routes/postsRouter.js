const express = require('express');
const postController = require('../controller/postController');
const middlewares = require('../Middlewares/middlewares')

const { createPost, getPosts, updatePost, deletePost } = postController;
const { validator } = middlewares;
const Router = express.Router();

Router.route('/').get(validator, getPosts).post(validator, createPost)
Router.route('/update/:id').patch(validator, updatePost);
Router.route('/delete/:id').delete(validator, deletePost);

module.exports = Router;