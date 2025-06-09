const Sequelize = require('sequelize');

const connection = new Sequelize('NOME_BANCO', 'USUARIO', 'SENHA', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = connection;