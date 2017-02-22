import {AuthorSchema, getAuthor, getAuthors} from './models/author';
import {buildSchema} from 'graphql';

let schema = [`
 type Query {
    getAuthor(id: Int!): Author
    getAuthors: [Author]
  }
`];

schema.push(AuthorSchema);

export const GraphQLSchema = buildSchema(schema.join('\n'));

export const root = {
    getAuthor: getAuthor,
  getAuthors: getAuthors
}