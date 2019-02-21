module.exports = (sequelize, DataTypes) => {
    const AuthorPost = sequelize.define('AuthorPosts', {
        authorId: {
            allowNull: false,
            field: 'author_id',
            type: DataTypes.INTEGER,
        },
        postId: {
            allowNull: false,
            field: 'post_id',
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'author_posts',
        timestamps: false,
    });

    return AuthorPost;
};
