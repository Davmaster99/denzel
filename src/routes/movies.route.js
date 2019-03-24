const Router = require('koa-router');
const movie = require('../controllers/movie.controller');

const router = new Router();

router.get("/movies/populate", movie.populate);

router.get("/movies/", movie.getRandom);

router.get("/movies/search", movie.research);

router.get("/movies/:id", movie.getById);

router.post("/movies/:id", movie.review);

module.exports = router;