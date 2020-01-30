const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {

    // Read all users from the database and print them to the console
    const allUsers = await prisma.users()
    // console.log(allUsers)

    //Read all Comments
    const comments = await prisma.comments();
           // console.log(comments);

    //Check if a specific data exits
    const checkComments = await prisma.$exists.user({
               id:"5e3177799bd11600079d8459"
           })
    // console.log({poop:checkComments});
}

main().catch(e => console.error(e))
