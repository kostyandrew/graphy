import {MyGraphQLSchema} from 'graphql';
import graphqlHTTP from 'express-graphql';
import express from 'express';
import $Schema from './app/schema';

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: $Schema,
    graphiql: true
}));

app.listen(8080, () => console.log('Start listening'));
