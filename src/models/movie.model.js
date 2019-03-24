const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    link: String,
    id: String,
    metascore: Number,
    poster: String,
    rating: Number,
    synopsis: String,
    title: String,
    votes: Number,
    year: Number 
});

mongoose.model('movie', movieSchema);

module.exports = mongoose.model('movie');