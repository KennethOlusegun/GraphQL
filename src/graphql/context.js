/* eslint-disable prettier/prettier */
import fetch from 'node-fetch';

export const context = () => {
    return {
        getUsers: (path = '/') => {
            const url = 'http://localhost:8080/users' + path;
            fetch(url);
        },
    };
};