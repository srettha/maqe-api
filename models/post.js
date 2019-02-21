module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        },
        imageUrl: {
            field: 'image_url',
            type: DataTypes.STRING,
        },
        isDrafted: {
            defaultValue: false,
            field: 'is_drafted',
            type: DataTypes.BOOLEAN,
        },
        publishedAt: {
            field: 'published_at',
            type: DataTypes.DATE
        },
        createdAt: {
            allowNull: false,
            defaultValue: sequelize.fn('NOW'),
            field: 'created_at',
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            defaultValue: sequelize.fn('NOW'),
            field: 'updated_at',
            type: DataTypes.DATE
        },
        deletedAt: {
            field: 'deleted_at',
            type: DataTypes.DATE
        },
    }, {
        tableName: 'posts',
        paranoid: true,
    });

    Post.associate = ({ Author }) => {
        Post.belongsToMany(Author, {
            as: 'authors',
            foreignKey: 'postId',
            otherKey: 'authorId',
            through: 'AuthorPosts',
        });
    };

    return Post;
};
