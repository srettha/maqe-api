const { makeExecutableSchema } = require('apollo-server-express');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers,
});
