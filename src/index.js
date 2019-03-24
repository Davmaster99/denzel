const Koa = require('koa');
const cors = require('@koa/cors');
const mount = require('koa-mount');
const graphql = require('koa-graphql');
const respond = require('koa-respond');
const bodyParser = require('koa-bodyparser');

const db = require('./misc/dbconnect');
const movieRouter = require('./routes/movies.route');
const graphqlSchema = require('./models/graphql.model');

const app = new Koa();
app.use(cors());

const port = 9292;

db.connect(
    "denzel",
    "denzel",
    "denzel",
)

app.use(bodyParser());
app.use(respond());

app.use(movieRouter.routes());
app.use(mount("/graphql", graphql({
    schema: graphqlSchema,
    graphiql: true, 
})))

const server = app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});

module.exports = server;