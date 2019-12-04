const { ApolloServer, gql } = require("apollo-server");
module.exports = typeDefs = gql`
  type Query {
    hello: String!
    cats: number
    number(_id: String): number
    numbers: [number]
  }
  type Cat {
    id: ID!
    name: String!
  }
  type number {
    _id: String
    number1: Int
    number2: Int
    addNumber: Int
    moltNumber: Int
  }

  type Mutation {
    createCat(name: String!): Cat!
    createNumber(number1: Int, number2: Int): number!
    removeNumber(id: String): String!
    editNumber(number1: Int, number2: Int, id: String ): String!
  }
`;
