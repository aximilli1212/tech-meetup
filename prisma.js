import { Prisma } from 'prisma-binding';
const prisma = new Prisma({
    typeDefs:'src',
    endpoint:'localhost:4460',
})
