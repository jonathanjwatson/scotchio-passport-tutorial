var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var encrypt = require('mongoose-encrypt');


// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(12), null);
};

userSchema.plugin(encrypt, {
    paths: ['local.password'],
    password: function(date) {
        //Return the correct password for the given date. 
        //As long as you don't need to migrate to a new password, just return the current one. 
        return process.env.AES_ENCRYPTION_PASSWORD;
    }
});

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);