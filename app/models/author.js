import Sequelize from 'sequelize';
import connect from '../connect';
import {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLDate, GraphQLNonNull, GraphQLList} from '../graphql';

export const Author = connect.define('author', {
    name: {
        type: Sequelize.STRING,
    }
});
Author.sync();

export const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: function () {
        const {MessageType, Message} = require('./message');
        return {
            id: {type: GraphQLInt},
            name: {type: GraphQLString},
            createdAt: {type: GraphQLDate},
            updatedAt: {type: GraphQLDate},
            messages: {
                type: new GraphQLList(MessageType),
                resolve: (parent) => Message.findAll({
                    where: {
                        authorId: parent.id
                    }
                })
            }
        }
    }
});

export const AuthorField = {
    author: {
        args: {
            id: {type: new GraphQLNonNull(GraphQLInt)},
        },
        type: AuthorType,
        resolve: (_, {id}) => {
            return Author.findById(id);
        }
    }
};
export const AuthorsField = {
    authors: {
        type: new GraphQLList(AuthorType),
        resolve: () => Author.findAll()
    }
};