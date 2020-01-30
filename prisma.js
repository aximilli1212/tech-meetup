import { Prisma } from 'prisma-binding';
const prisma = new Prisma({
    typeDefs:'./generated/prisma-client/prisma-schema',
    endpoint:'http://localhost:4460',
});

 prisma.query.users(null,'{id name email}').then(e=>{
     console.log(e);
 }).catch(err=>{
     console.log(err)
 });
