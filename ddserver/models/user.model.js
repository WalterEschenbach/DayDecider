const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {type: String},
    googleId: {type: String},
    email: {type: String},
    events: {type: Array}
}, {
    timestamps: true
})

const User = mongoose.model('users', userSchema);

module.exports = User;