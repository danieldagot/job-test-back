const { ApolloServer, gql } = require("apollo-server-express");
//const port = process.env.PORT
const path = require("path");
require('dotenv').config()
let port = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const resolvers = require("./src/resolvers");
const typeDefs = require("./src/typeDefs");
const express = require("express")
const startServer = async () => {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });

  await mongoose.connect("mongodb://localhost:27017/test3", {
    useNewUrlParser: true,
    useUnifiedTopology:true
  });

  app.listen({ port: port }, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
  );
};

startServer();
