const authorService = require('../../services/author');
const postService = require('../../services/post');

const PostResolver = {
    Post: {
        authors: ({ id }) => authorService.getAuthorsByPostId(id),
    },
    Query: {
        post: (_root, { id }) => postService.getPost(id),
        posts: (_root, args) => postService.getPosts(args.postPagination),
    },
    Mutation: {
        createPost: (_root, { postInput }) => postService.createPost(postInput),
        deletePost: (_root, { id }) => postService.deletePost(id),
        updatePost: (_root, { id, postInput }) => postService.updatePost(id, postInput),
    },
};

module.exports = PostResolver;
