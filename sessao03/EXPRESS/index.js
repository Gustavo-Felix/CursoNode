const express = require('express'); // importando o express
const app = express(); // iniciando o express

app.get("/", (req, res) => {
    res.send("<h1>Bem-vindo!</h1>");
    
});

app.get("/blog/:artigo?", (req, res) => {

    var artigo = req.params.artigo;

    if(artigo) {
        res.send("<h2>Artigo: " + artigo + "</h2>");
    }
    else{
        res.send("<h1>Bem-vindo ao Blog!</h1>");
    }
    
});

app.get("/canal/youtube", (req, res) => {
    var canal = req.query["canal"];

    if(canal){
        res.send(canal);
    }
    else{
        res.send('Nenhum canal encontrado!')
    }

});

app.get("/ola/:nome/:empresa", (req, res) => {
    // req => Dados enviados pelo usuário
    // res => Resposta do servidor para o usuário
    var nome = req.params.nome
    var empresa = req.params.empresa
    res.send('<h1>Oi ' + nome + ' do ' + empresa + ' </h1>');

});

app.listen(8080, (err) => {
    if(err){
        console.log('Ocorreu um erro!', err);
    }
    else{
        console.log('Servidor iniciado com sucesso!');
    }
});

