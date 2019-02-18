module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define('Author', {
        name: {
            type: DataTypes.STRING,
        },
        role: {
            type: DataTypes.STRING,
        },
        place: {
            type: DataTypes.STRING,
        },
        avatarUrl: {
            field: 'avatar_url',
            type: DataTypes.STRING,
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
        tableName: 'authors',
        paranoid: true,
    });

    return Author;
};
