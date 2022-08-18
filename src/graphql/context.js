/* eslint-disable prettier/prettier */
import fetch from 'node-fetch';

const API_URL = 'http://localhost:8080';

export const context = () => {
    return {
        getUsers: (path = '/') => fetch(API_URL + '/users' + path),
        getPosts: (path = '/') => fetch(API_URL + '/posts' + path),
    };
};