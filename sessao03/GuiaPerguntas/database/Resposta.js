const Sequelize = require('sequelize');
const connection = require('./database');

const Resposta = connection.define('respostas', { 
    body: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

Resposta.sync({force: false}).then(() => {
    console.log('Tabela Resposta criada com sucesso!');

}); 

module.exports = Resposta;