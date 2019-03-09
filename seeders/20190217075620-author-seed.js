module.exports = {
    up: queryInterface => queryInterface.bulkInsert('authors', [
        {
            name: 'Jason Bourne',
            role: 'Registered user',
            place: 'New York',
            avatar_url: 'https://api.adorable.io/avatars/250/jason-bourne',
        },
        {
            name: 'Michael De Santa',
            role: 'Moderator',
            place: 'Los Santos',
            avatar_url: 'https://api.adorable.io/avatars/250/michael',
        },
        {
            name: 'Peter Parker',
            role: 'Moderator',
            place: 'New York',
            avatar_url: 'https://api.adorable.io/avatars/250/peter-parker',
        },
        {
            name: 'Harry Potter',
            role: 'Admin',
            place: 'Hogwarts',
            avatar_url: 'https://api.adorable.io/avatars/250/harry',
        },
        {
            name: 'Boromir',
            role: 'Registered user',
            place: 'Gondor',
            avatar_url: 'https://api.adorable.io/avatars/250/boromir',
        },
        {
            name: 'Bruce Wayne',
            role: 'Sponsor',
            place: 'Gotham City',
            avatar_url: 'https://api.adorable.io/avatars/250/bruce-wayne',
        },
    ], {}),
    down: queryInterface => queryInterface.bulkDelete('Author', null, {}),
};
