import {AuthorSchema, getAuthor} from './models/author';
import {buildSchema} from 'graphql';

let schema = [`
 type Query {
    getAuthor(id: Int!): Author
  }
`];

schema.push(AuthorSchema);

export const GraphQLSchema = buildSchema(schema.join('\n'));

export const root = {
    getAuthor: getAuthor
}