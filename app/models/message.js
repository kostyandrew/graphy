import Sequelize from 'sequelize';
import connect from '../connect';
import {Author} from './author';
import {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLDate, GraphQLNonNull, GraphQLList} from '../graphql';

export const Message = connect.define('message', {
    message: {
        type: Sequelize.STRING,
    }
});

Message.hasMany(Message, {as: 'subMessages', allowNull: true});
Message.belongsTo(Author, {as: 'author', allowNull: false});

Message.sync();

export const MessageType = new GraphQLObjectType({
    name: 'Message',
    fields: function () {
        const {AuthorType} = require('./author');
        return {
            id: {type: GraphQLInt},
            message: {type: GraphQLString},
            author: {
                type: AuthorType,
                resolve: (parent) => Author.findById(parent.authorId)
            },
            subMessages: {
                type: new GraphQLList(MessageType),
                resolve: (parent) => Message.findAll({
                    where: {
                        messageId: parent.id
                    }
                })
            },
            createdAt: {type: GraphQLDate},
            updatedAt: {type: GraphQLDate},
        }
    }
});

export const MessageField = {
    message: {
        args: {
            id: {type: new GraphQLNonNull(GraphQLInt)},
        },
        type: MessageType,
        resolve: (_, {id}) => {
            return Message.findById(id);
        }
    }
};
export const MessagesField = {
    messages: {
        type: new GraphQLList(MessageType),
        resolve: () => Message.findAll()
    }
};