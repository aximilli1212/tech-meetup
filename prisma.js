import { Prisma } from 'prisma-binding';
const prisma = new Prisma({
    typeDefs:'src',
    endpoint:'http://localhost:4460',
});

 prisma.query.users(null,'{id name email}').then(e=>{
     console.log(e);
 }).catch(err=>{
     console.log(err)
 });
