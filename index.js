const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {
    // Create a new user called `Alice`
    const newUser = await prisma.createMeetup(
        {
            name: 'Alice',
            organizer: {name:"Abena"},
            title: 'Alice',
            description: 'Alice',
            location: 'Alice',
        })
    console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

    // Read all users from the database and print them to the console
    const allMeetUps = await prisma.meetups();
    console.log(allMeetUps)
}

main().catch(e => console.error(e))
