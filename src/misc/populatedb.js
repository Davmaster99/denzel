const getMoviesInfo = require('./imdb');
const Movie = require('../models/movie.model');

async function populatedb () {
    const res = await getMoviesInfo("nm0000243");

    try {
        Movie.collection.drop();
    } catch(e) {};
    await res.forEach(async e => {
        const newMovie = new Movie(e);
        newMovie.save();
    })
}

module.exports = populatedb;