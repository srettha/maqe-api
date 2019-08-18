const _ = require('lodash');

const { Author, Post } = require('../models');

/**
 * @public
 * @param {Object} queryObj
 * @returns {Promise<Object>}
 */
async function createPost(queryObj) {
    const authors = _.get(queryObj, 'authors', []);

    const post = await Post.create(_.omit(queryObj, 'authors'));
    await post.addAuthors(authors);

    return post;
}

/**
 * @public
 * @param {String} id
 * @returns {Promise<Object>}
 */
async function deletePost(id) {
    const post = await Post.findById(id);
    if (!post) {
        throw new Error('Post not found');
    }

    post.destroy();
    return post;
}

/**
 * @public
 * @param {Number} id
 * @returns {Promise<Object>}
 */
async function getPost(id) {
    const post = await Post.findOne({
        where: { id },
    });
    if (!post) {
        throw new Error('Post not found');
    }

    return post;
}

/**
 * @public
 * @param {Object} postPagniation
 * @param {Number=1} postPagniation.page
 * @param {Number=5} postPagniation.pageSize
 * @returns {Promise<Array<Object>>}
 */
async function getPosts({ page, pageSize } = { page: 1, pageSize: 5 }) {
    const posts = await Post.findAll({
        limit: pageSize,
        offset: (page - 1) * pageSize,
    });

    return posts;
}

/**
 * @public
 * @param {String} id
 * @returns {Promise<Object>}
 */
async function getPostsByAuthorId(id) {
    const posts = await Post.findAll({
        include: [
            {
                as: 'authors',
                model: Author,
                required: true,
                where: { id },
            },
        ],
    });

    return posts;
}

/**
 * @public
 * @param {String} id
 * @param {Object} queryObj
 * @returns {Promise<Object>}
 */
async function updatePost(id, queryObj) {
    const [count, post] = await Post.update(queryObj, {
        returning: true,
        where: { id },
    });
    if (count === 0) {
        throw new Error(`Post id ${id} is not being updated`);
    }

    return post[0];
}

module.exports = {
    createPost,
    deletePost,
    getPost,
    getPosts,
    getPostsByAuthorId,
    updatePost,
};
