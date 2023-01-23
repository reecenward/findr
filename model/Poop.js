const mongoose = require('mongoose');

require('dotenv').config();
//connect to the database
mongoose.connect(process.env.API_KEY);

const poopSchema = new mongoose.Schema({
    item: String
});

module.exports = mongoose.model('Poop', poopSchema);