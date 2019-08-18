const _ = require('lodash');

const AuthorResolver = require('./author');
const PostResolver = require('./post');

module.exports = _.merge(
    {},
    AuthorResolver,
    PostResolver,
);
