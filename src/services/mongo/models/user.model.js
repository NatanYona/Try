const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: String,
    username: String,
    password: String,
})

module.exports = mongoose.model('User', userSchema);