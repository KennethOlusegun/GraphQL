/* eslint-disable prettier/prettier */
const user = async(__, { id, teste }, { getUsers }) => {
    console.log('testando', teste);
    const response = await getUsers('/' + id);
    const user = await response.json();
    return user;
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