const populatedb = require('../misc/populatedb');
const Movie = require('../models/movie.model');
const Review = require('../models/review.model');

const populate = async (ctx) => {
    populatedb();
    ctx.noContent();
}

const getRandom = async (ctx) => {
    let randNumber = 0;

    await Movie.find({metascore: {$gt: 69}}, (err, res) => {
        if (err) {
            ctx.internalServerError(err);
        } else {
            randNumber = Math.floor(Math.random() * Math.floor(res.length));
            ctx.ok(res[randNumber]);
        }
    });
}

const getById = async (ctx) => {
    const id = ctx.params.id;
    await Movie.findOne({id: id}, (err, res) => {
        if (err) {
            console.error(err);
            ctx.internalServerError(err);
        } else {
            ctx.ok(res)
        }

    })
}

const research = async (ctx) => {
    let {limit, metascore} = ctx.query;

    limit = limit === undefined ? 5 : limit;
    metascore = metascore === undefined ? 0 : metascore;
    await Movie.find({metascore: {$gt: Number(metascore)}}, async (err, res) => {
        if (err) {
            console.error(err);
            ctx.internalServerError(err);
        } else {
            res.filter(movie => movie.limit >= limit && movie.metascore >= metascore)
            ctx.ok(res);
        }
    }).limit(Number(limit));
}

const review = async (ctx) => {
    const newReviw = new Review({
        movieId:    ctx.params.id,
        date:       Date.now(),
        review:     ctx.request.body.review,
    });

    newReviw.save();
    ctx.noContent();
}

module.exports = {
    populate,
    getRandom,
    getById,
    research,
    review
}