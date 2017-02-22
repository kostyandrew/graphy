import Sequelize from 'sequelize';
import connect from '../connect';
export const Author = connect.define('author', {
    name: {
        type: Sequelize.STRING,
    }
});
Author.sync();

export const AuthorSchema = `
    type Author {
        name: String!,
        createdAt: String!
    }
`;


export const getAuthor = ({id}) => {
    return Author.findById(id).then((author) => {
        return author;
    })
}