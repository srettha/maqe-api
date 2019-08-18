const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');
const config = require('config');
const express = require('express');

const schema = require('./graphql');

const app = express();
const server = new ApolloServer({ schema });

app.use(bodyParser.json());

server.applyMiddleware({ app });

app.set('port', config.get('app.port'));

module.exports = app;
