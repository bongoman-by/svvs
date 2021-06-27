module.exports = {
  name: 'API GraphQL Schema',
  schemaPath: 'schema.graphql',
  extensions: {
    endpoints: {
      'Default GraphQL Endpoint': {
        url: 'http://localhost:3333/graphql',
        headers: {
          'user-agent': 'JS GraphQL',
        },
        introspect: false,
      },
    },
  },
};