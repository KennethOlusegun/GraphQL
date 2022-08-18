/* eslint-disable prettier/prettier */
const user = () => {
    return {
        id: '1',
        userName: 'Kenneth',
    };
};

const users = () => {
    return [{
            id: '1',
            userName: 'Kenneth',
        },
        {
            id: '2',
            userName: 'Olusegun',
        },
        {
            id: '3',
            userName: 'Obàfèmi',
        },
    ];
};

export const userResolvers = {
    Query: {
        user,
        users,
    },
};