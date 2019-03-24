const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require('graphql');
const Movie = require('./movie.model');
const populate = require('../misc/populatedb');

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: {type: GraphQLString},
        link: {type: GraphQLString},
        metascore: {type: GraphQLString},
        synopsis: {type: GraphQLString},
        title: {type: GraphQLString},
        year: {type: GraphQLString},
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      movie: {
        type: MovieType,
        args: { id: { type: GraphQLString }},
        resolve(parent, args) {
          return Movie.findById(args.id)
        }
      }
    }
  })
  
module.exports = new GraphQLSchema({
    query: RootQuery,
});