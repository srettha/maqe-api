const { gql } = require('apollo-server-express');

const AuthorTypeDefs = gql`
    type Author {
        id: ID!
        name: String!
        role: String!
        place: String!
        avatarUrl: String!
        # posts: [Post!]!
    }

    input AuthorInput {
        name: String!
        role: String!
        place: String!
        avatarUrl: String!
        # posts: [Post!]!
    }

    input AuthorPagination {
        page: Int
        pageSize: Int
    }

    extend type Query {
        author(id: Int!): Author
        authors(authorPagination: AuthorPagination): [Author!]!
    }

    extend type Mutation {
        createAuthor(authorInput: AuthorInput!): Author
        updateAuthor(id: Int!, authorInput: AuthorInput!): Author
        deleteAuthor(id: Int!): Author
    }
`;

module.exports = AuthorTypeDefs;
