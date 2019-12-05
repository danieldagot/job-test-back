// const { ApolloServer, gql } = require("apollo-server-express");
// //const port = process.env.PORT
// const path = require("path");
// //require('dotenv').config()
// let port = 4000;
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const resolvers = require("./src/resolvers");
// const typeDefs = require("./src/typeDefs");
// const express = require("express")

// const startServer = async () => {
//   const app = express();
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers
//   });

//   server.applyMiddleware({ app });
//   await mongoose.connect("mongodb://localhost:27017/test3", {
//     useNewUrlParser: true,
//     useUnifiedTopology:true
//   });

//   app.listen({ port: port }, () =>
//     console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
//   );
// };

// startServer();

const express = require('express');
const app = express();
const { ApolloServer, gql } = require("apollo-server-express");
//const port = process.env.PORT
const path = require("path");
let port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const resolvers = require("./src/resolvers");
const typeDefs = require("./src/typeDefs");
const cors = require('cors');


app.use(cors({
  origin: function (origin, callback) {
      // allow requests with no origin 
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
          var msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
          return callback(new Error(msg), false);
      }
      return callback(null, true);
  }
}));



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
  app.use('/', (req, res) => res.send("pace go to /graphql"))
  app.listen(port)
};


startServer();