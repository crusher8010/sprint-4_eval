const jwt = require('jsonwebtoken');

exports.validator = (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
        jwt.verify(token, process.env.KEY, (err, data) => {
            if (err) {
                res.send({ message: 'Please Login first....' })
            } else {
                const userId = data.userId;
                // console.log(userId);
                req.body.userId = userId;
                next();
            }
        });
    } else {
        res.send({ message: 'Please Login first....' })
    }
}