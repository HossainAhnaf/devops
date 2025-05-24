const { ApolloServer } = require('apollo-server');
const connectToDB = require('./db');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { PORT , PUBLIC_URL} = require('./utils/config');
const os = require('os');

connectToDB();

const hostname = os.hostname();
console.log(`Running on hostname: ${hostname}`);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    req,
    hostname,
  }),
  cors: {
    origin: PUBLIC_URL,  // Allow React dev server
    credentials: true,                // If you use cookies or auth headers
  },
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
