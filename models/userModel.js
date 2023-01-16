const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    gender: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

const Users = mongoose.model('users', UserSchema);

module.exports = Users;