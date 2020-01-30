const { prisma } = require('../generated/prisma-client');
const { GraphQLServer } = require('graphql-yoga');
const typeDefs = require("../generated/prisma-client/prisma-schema").typeDefs;


const resolvers = {

}

const server = new GraphQLServer({
    typeDefs: typeDefs,
    resolvers,
    context: {
        prisma,
    },
})
server.start(() => console.log('Server is running on http://localhost:4000'))
