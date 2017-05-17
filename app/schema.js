import {AuthorField, AuthorsField} from './models/author';
import {MessageField, MessagesField} from './models/message';
import {GraphQLSchema, GraphQLObjectType} from 'graphql';

const $Query = new GraphQLObjectType({
    name: 'Query',
    fields: Object.assign({}, AuthorField, AuthorsField, MessageField, MessagesField)
});

const $Schema = new GraphQLSchema({
    query: $Query
});

export default $Schema;