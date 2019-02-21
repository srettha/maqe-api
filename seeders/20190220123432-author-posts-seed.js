module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('author_posts', [
            {
                author_id: 1,
                post_id: 1,
            },
            {
                author_id: 5,
                post_id: 2,
            },
            {
                author_id: 1,
                post_id: 3,
            },
            {
                author_id: 2,
                post_id: 4,
            },
            {
                author_id: 3,
                post_id: 5,
            },
            {
                author_id: 5,
                post_id: 6,
            },
            {
                author_id: 4,
                post_id: 7,
            },
            {
                author_id: 2,
                post_id: 8,
            },
            {
                author_id: 6,
                post_id: 9,
            },
            {
                author_id: 3,
                post_id: 10,
            },
            {
                author_id: 3,
                post_id: 11,
            },
            {
                author_id: 4,
                post_id: 12,
            },
            {
                author_id: 5,
                post_id: 13,
            },
            {
                author_id: 1,
                post_id: 14,
            },
            {
                author_id: 2,
                post_id: 15,
            },
            {
                author_id: 6,
                post_id: 16,
            },
            {
                author_id: 3,
                post_id: 17,
            },
            {
                author_id: 6,
                post_id: 18,
            },
            {
                author_id: 2,
                post_id: 19,
            },
            {
                author_id: 4,
                post_id: 20,
            }
        ], {});
    },

    down: (queryInterface) => {
        return queryInterface.bulkDelete('author_posts', null, {});
    }
};
