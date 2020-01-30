const { prisma } = require('../generated/prisma-client');
const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require("../generated/prisma-client/prisma-schema").typeDefs;
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");


const resolvers = {
    Query,
    Mutation,
    Node:{
        __resolveType() {
            return null;
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
