const AuthorResolver = require('./author');
const PostResolver = require('./post');

module.exports = {
    ...AuthorResolver,
    ...PostResolver,
    Mutation: {
        ...AuthorResolver.Mutation,
        ...PostResolver.Mutation,
    },
    Query: {
        ...AuthorResolver.Query,
        ...PostResolver.Query,
    },
};
