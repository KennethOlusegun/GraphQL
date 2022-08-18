/* eslint-disable prettier/prettier */
import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
    typeDefs: gql `
    type Query {
      id: ID!
      name: String!
      age: Int!
      average: Float!
      married: Boolean!
      arrayString: [String!]!
    }
  `,
    resolvers: {
        Query: {
            id: () => '1asd987-9-a',
            name: () => 'Kenneth Olusegun',
            age: () => 24,
            average: () => 50.55,
            married: () => false,
            arrayString: () => ['A', 'B'],
        },
    },
});

server.listen(4000).then(({ url }) => {
    console.log(`Server listening on url ${url}`);
});