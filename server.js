const { ApolloServer, gql } = require("apollo-server-express");
//const port = process.env.PORT
const path = require("path");
let port = process.env.PORT || 8080;
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

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
