import Sequelize from 'sequelize';
import connect from '../connect';
export const Author = connect.define('author', {
  name: {
    type: Sequelize.STRING,
  }
});
Author.sync();

export const AuthorSchema = `
  # A type that describes the Author
  type Author {
      # The author's username
      name: String!,
      # The author's createdAt
      createdAt: String!
  }
`;


export const getAuthor = ({id}) => {
  return Author.findById(id).then((author) => {
    return author;
  })
}

export const getAuthors = () => {
  return Author.findAll().then((authors) => {
    return authors;
  })
}