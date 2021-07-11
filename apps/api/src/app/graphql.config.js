module.exports = {
  name: 'API GraphQL Schema',
  schemaPath: 'api-app.graphql',
  projects: {
    api: {
      includes: ['./users/*graphql', './auth/*graphql'],
    },
  },
  extensions: {
    endpoints: {
      'Default GraphQL Endpoint': {
        url: 'http://localhost:3333/graphql',
        headers: {
          'user-agent': 'JS GraphQL',
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwidXNlcklkIjoxLCJpYXQiOjE2MjU5MDY0OTYsImV4cCI6MTYyNjI2NjQ5Nn0.xKM5U8Op9xB1sHgWfVnpIyRQgQB0IEwPbTmEyHf6wsU',
        },
        introspect: false,
      },
    },
  },
};
