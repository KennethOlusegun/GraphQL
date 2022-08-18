/* eslint-disable prettier/prettier */
import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
    typeDefs: gql `
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      userName: String!
    }
  `,
    resolvers: {
        Query: {
            user: () => {
                return {
                    id: 'asd8708',
                    userName: 'KennethOlusegun',
                };
            },
            users: () => {
                return [{
                        id: '1',
                        userName: 'KennethOlusegun',
                    },
                    {
                        id: '2',
                        userName: 'PauloRicardo',
                    },
                    {
                        id: '3',
                        userName: 'AnaMargarida',
                    },
                ];
            },
        },
    },
});

server.listen(4000).then(({ url }) => {
    console.log(`Server listening on url ${url}`);
});