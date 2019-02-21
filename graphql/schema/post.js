const { gql } = require('apollo-server-express');

const PostTypeDefs = gql`
    type Post {
        id: ID!
        title: String!
        description: String!
        imageUrl: String!
        isDeleted: Boolean
        isDrafted: Boolean!
        createdAt: String!
        publishedAt: String
        authors: [Author!]!
    }

    input PostInput {
        title: String!
        description: String!
        imageUrl: String!
        isDeleted: Boolean
        isDrafted: Boolean!
        publishedAt: String
        authors: [ID!]!
    }

    extend type Query {
        post(id: Int!): Post
        posts(postPagination: Pagination): [Post!]!
    }

    extend type Mutation {
        createPost(postInput: PostInput!): Post
        updatePost(id: Int!, postInput: PostInput!): Post
        deletePost(id: Int!): Post
    }
`;

module.exports = PostTypeDefs;
