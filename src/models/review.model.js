const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    date:       Date,
    review:     String,
    movieId:    String,
});

mongoose.model('review', reviewSchema);

module.exports = mongoose.model('review');