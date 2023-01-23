const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String
});

const userItemsSchema = new mongoose.Schema({
    username: String,
    items: [itemSchema]
});

module.exports = mongoose.model('UserItems', userItemsSchema);