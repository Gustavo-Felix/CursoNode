const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');
const Resposta = require('./database/Resposta');
const { where } = require('sequelize');

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
    Pergunta.findAll({ row: true, order: [
        ['id', 'DESC'] // ASC = Crescente - DESC = Decrescente
    ] }).then((perguntas) => {
        res.render('index.ejs', {
            perguntas: perguntas
        });
    });
});

app.get("/perguntar", (req, res) => {
    res.render('perguntar.ejs');

});

app.post("/salvarPerguntas", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        title: titulo,
        description: descricao,
    }).then(() => {
        res.redirect("/");
    })

});

app.get("/pergunta/:id", (req, res) => {
    var id = req.params.id;
    Pergunta.findOne({ 
        where: {id:id}
    }).then((pergunta) => {
        if(pergunta != undefined) {
            Resposta.findAll({where:
                {perguntaId:pergunta.id},
                order: [ ['id', 'DESC'] ]
            }).then((respostas) => {
                res.render("pergunta", {
                    pergunta: pergunta,
                    respostas: respostas
                });
            });
        }
        else{
            res.redirect('/')
        }
    });
});

app.post("/responder", (req, res) => {
    var body = req.body.body;
    var perguntaId = req.body.pergunta;
    Resposta.create({
        body: body,
        perguntaId: perguntaId,
    }).then(() => {
        res.redirect("/pergunta/" + perguntaId);
    })

});

app.listen(8080, () => {
    console.log('App Rodando');

});