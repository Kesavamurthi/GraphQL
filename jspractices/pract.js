let { graphql, buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
let schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
let root = {
  hello: () => {
    return 'Hello world!';
  },
};

// Run the GraphQL query '{ hello }' and print out the response
graphql({ schema, source: '{ hello }', rootValue: root }).then((response) => {
  console.log(JSON.stringify(response, null, 2));
});