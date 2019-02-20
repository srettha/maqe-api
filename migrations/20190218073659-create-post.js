module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('posts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            imageUrl: {
                field: 'image_url',
                type: Sequelize.STRING
            },
            isDrafted: {
                defaultValue: false,
                field: 'is_drafted',
                type: Sequelize.BOOLEAN
            },
            publishedAt: {
                field: 'published_at',
                type: Sequelize.DATE
            },
            createdAt: {
                allowNull: false,
                defaultValue: queryInterface.sequelize.fn('NOW'),
                field: 'created_at',
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                defaultValue: queryInterface.sequelize.fn('NOW'),
                field: 'updated_at',
                type: Sequelize.DATE
            },
            
            deletedAt: {
                field: 'deleted_at',
                type: Sequelize.DATE
            },
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('posts');
    }
};
