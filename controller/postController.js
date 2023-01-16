const Posts = require('../models/postModel');

exports.createPost = async (req, res) => {
    try {
        console.log(req.body)
        const newPost = await Posts.create(req.body);

        console.log(newPost.userId)

        res.status(201).json({
            status: 'success',
            data: {
                newPost
            }
        })

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            err
        });
    }
}

exports.getPosts = async (req, res) => {
    try {
        let posts = await Posts.find({ userId: req.body.userId });

        res.status(200).json({
            status: "success",
            results: posts.length,
            data: {
                posts
            }
        })

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            err
        });
    }
}

exports.updatePost = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        const post = await Posts.findById({ "_id": id })
        console.log(post)
        if (post.userId === req.body.userId) {
            const updatedPost = await Posts.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true,
            })

            res.status(200).json({
                status: "success",
                message: "Post is Updated",
                data: {
                    updatedPost
                }
            })
        } else {
            res.status(404).json({
                status: 'fail',
                message: 'You are not authorised'
            })
        }
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            err
        });
    }
}

exports.deletePost = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Posts.findById({ "_id": id })
        // console.log(blog.userId, req.body.userId)

        if (post.userId === req.body.userId) {
            // console.log('Hello')
            await Posts.findByIdAndDelete({ "_id": id });

            res.status(200).json({
                message: "Post is Deleted",
            })
        } else {
            res.status(404).json({
                status: 'fail',
                message: 'You are not authorised'
            })
        }

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            err
        });
    }
}