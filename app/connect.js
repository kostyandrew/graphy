import Sequelize from 'Sequelize';
export default new Sequelize('node_app', 'root', 'password', {
    host: 'postgres',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
