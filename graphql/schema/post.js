const { gql } = require('apollo-server-express');

const PostTypeDefs = gql`
    type Post {
        id: ID!
        # authors: [Author!]!
        title: String!
        description: String!
        imageUrl: String!
        isDeleted: Boolean
        isDrafted: Boolean!
        createdAt: String!
        publishedAt: String
    }

    input PostInput {
        # authors: [ID!]!
        title: String!
        description: String!
        imageUrl: String!
        isDeleted: Boolean
        isDrafted: Boolean!
        publishedAt: String
    }

    input PostPagination {
        page: Int
        pageSize: Int
    }

    extend type Query {
        post(id: Int!): Post
        posts(postPagination: PostPagination): [Post!]!
    }

    extend type Mutation {
        createPost(postInput: PostInput!): Post
        updatePost(id: Int!, postInput: PostInput!): Post
        deletePost(id: Int!): Post
    }
`;

module.exports = PostTypeDefs;
