/* eslint-disable prettier/prettier */
import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
    typeDefs: gql `
    type Query {
      hello: String
      hi: String
    }
  `,
    resolvers: {
        Query: {
            hello: () => {
                return 'Hello again';
            },
            hi: () => {
                return 'Hi people';
            },
        },
    },
});

server.listen(4000).then(({ url }) => {
    console.log(`Server listening on url ${url}`);
});