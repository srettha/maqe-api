const { Author } = require('../models');

/**
 * @public
 * @param {Object} queryObj
 * @returns {Promise<Object>}
 */
async function createAuthor(queryObj) {
    const author = await Author.create(queryObj);
    return author;
}

/**
 * @public
 * @param {String} id
 * @returns {Promise<Object>}
 */
async function deleteAuthor(id) {
    const author = await Author.findById(id);
    if (!author) {
        throw new Error('Author not found');
    }

    author.destroy();
    return author;
}

/**
 * @public
 * @param {String} id
 * @returns {Promise<Object>}
 */
async function getAuthor(id) {
    const author = await Author.findById(id);
    if (!author) {
        throw new Error('Author not found');
    }

    return author;
}

/**
 * @public
 * @param {Object} authorPagination
 * @param {Number=1} authorPagination.page
 * @param {Number=5} authorPagination.pageSize
 * @returns {Promise<Array<Object>>}
 */
async function getAuthors({ page, pageSize } = { page: 1, pageSize: 5 }) {
    const authors = await Author.findAll({
        limit: pageSize,
        offset: (page - 1) * pageSize,
    });

    return authors;
}

/**
 * @public
 * @param {String} id
 * @param {Object} queryObj
 * @returns {Promise<Object>}
 */
async function updateAuthor(id, queryObj) {
    const [count, author] = await Author.update(queryObj, {
        returning: true,
        where: { id },
    });
    if (count === 0) {
        throw new Error(`Author id ${id} is not being updated`);
    }

    return author[0];
}

module.exports = {
    createAuthor,
    deleteAuthor,
    getAuthor,
    getAuthors,
    updateAuthor,
};
