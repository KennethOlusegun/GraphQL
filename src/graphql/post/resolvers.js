/* eslint-disable prettier/prettier */
const post = () => {
    return {
        id: '1',
        title: 'GraphQL',
    };
};

const posts = () => {
    return [{
            id: '1',
            title: 'GraphQL',
        },
        {
            id: '2',
            title: 'Apollo',
        },
        {
            id: '3',
            title: 'Prisma',
        },
    ];
};

export const postResolvers = {
    Query: {
        post,
        posts,
    },
};