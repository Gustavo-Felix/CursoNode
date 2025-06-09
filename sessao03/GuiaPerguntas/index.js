const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const perguntaModel = require('./database/Pergunta');

// Database

connection
    .authenticate()
    .then(() => {
        console.log('Conexão Feita com sucesso!');
    })
    .catch((erro) => {
        console.log('Erro: ' + erro);
    })

app.set('view engine', 'ejs'); // Estou dizendo para usar o EJS como View Engine
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render('index.ejs');

});

app.get("/perguntar", (req, res) => {
    res.render('perguntar.ejs');

});

app.post("/salvarPerguntas", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulário Recebido!\nTitulo: " + titulo + '\nDescrição: ' + descricao);

});

app.listen(8080, () => {
    console.log('App Rodando');

});