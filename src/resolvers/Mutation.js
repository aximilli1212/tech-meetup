
const Mutations = {
    async updateComment(_, args, context, info) {
        args.email = args.email.toLowerCase();
        if (args.password !== args.confirmPassword) {
            throw new Error("Passwords didn't match");
        }
        const password = await bcrypt.hash(args.password, 10);
        delete args.confirmPassword;
        const user = await context.prisma.mutation.createUser(
            {
                data: {
                    ...args,
                    password,
                },
            },
            info
        );

        const token = jwt.sign({userId: user.id}, process.env.APP_SECRET);

        context.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365,
        });

        return user;
    },
}

module.exports = Mutations;
