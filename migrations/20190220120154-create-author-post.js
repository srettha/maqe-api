module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('author_posts', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        authorId: {
            allowNull: false,
            field: 'author_id',
            type: Sequelize.INTEGER,
            reference: {
                model: 'authors',
                key: 'id',
            },
        },
        postId: {
            allowNull: false,
            field: 'post_id',
            type: Sequelize.INTEGER,
            reference: {
                model: 'posts',
                key: 'id',
            },
        },
    }),
    down: queryInterface => queryInterface.dropTable('author_posts'),
};
