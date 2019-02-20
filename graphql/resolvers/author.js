const authorService = require('../../services/author');

const AuthorResolver = {
    Query: {
        author: (_root, { id }) =>  authorService.getAuthor(id),
        authors: (_root, { authorPagination }) => authorService.getAuthors(authorPagination),
    },
    Mutation: {
        createAuthor: (_root, { authorInput }) => authorService.createAuthor(authorInput),
        deleteAuthor: (_root, { id }) => authorService.deleteAuthor(id),
        updateAuthor: (_root, { id, authorInput }) => authorService.updateAuthor(id, authorInput),
    },
};

module.exports = AuthorResolver;
