/* eslint-disable prettier/prettier */
const user = async(_, __, { fetch }) => {
    const user = await fetch('http://localhost:8080/users/602');
    return user.json();
};

const users = async(_, __, { fetch }) => {
    console.log(fetch);
    const users = await fetch('http://localhost:8080/users');
    return users.json();
};

export const userResolvers = {
    Query: {
        user,
        users,
    },
};