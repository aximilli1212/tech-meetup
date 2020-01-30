const { forwardTo } = require('prisma-binding');

const Query = {
    users(root, args, context) {
        return context.prisma.users()
    },
    comments(root, args, context) {
        return context.prisma.comments();
    },
    user(_, args, context, info) {
        return context.prisma.query.user(
            {
                where: {
                    id: args.id,
                },
            },
            info
        );
    },

}

module.exports = Query;
