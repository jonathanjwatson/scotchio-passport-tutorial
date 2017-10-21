const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = mongoose.Schema({
    local : {
        email: String,
        password: String,
    },
    facebook : {
        id: String,
        token: String,
        email: String,
        name: String
    },
    twitter : {
        id: String,
        token: String,
        displayName: String,
        username: String
    },
    google: {
        id: String,
        tokenk: String,
        email: String,
        name: String
    }
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(12), null)
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.localpassword);
};

module.exports = mongoose.model('User', userSchema);