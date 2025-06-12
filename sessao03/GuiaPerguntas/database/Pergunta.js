const Sequelize = require('sequelize');
const connection = require('./database');

const Pergunta = connection.define('perguntas', { // Cria a tabela no MySQL utilizando Javascript - Tabela pergunta, com os valores title (String) e description (String)
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

Pergunta.sync({force: false}).then(() => {
    console.log('Tabela Pergunta criada com sucesso!');

}); // Se não existir a tabela pergunta, ela será criada

module.exports = Pergunta;