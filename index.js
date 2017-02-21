import {MyGraphQLSchema} from 'graphql';
import graphqlHTTP from 'express-graphql';
import express from 'express';
import {GraphQLSchema, root} from './app/db';

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: GraphQLSchema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log('Start listening'));
