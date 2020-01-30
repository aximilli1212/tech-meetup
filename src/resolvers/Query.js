const { forwardTo } = require('prisma-binding');

const Query = {
    users(root, args, context) {
        return context.prisma.users()
    },
    comments(root, args, context) {
        return context.prisma.comments();
    },

}

module.exports = Query;
