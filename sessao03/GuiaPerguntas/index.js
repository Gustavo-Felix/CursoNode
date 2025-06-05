const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // Estou dizendo para usar o EJS como View Engine

app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var ExibirMsg = false;
    var Produtos = [
        {nome: 'Doritos', preco: 7.99},
        {nome: 'Playstation', preco: 3599.99},
        {nome: 'Xbox', preco: 2999.99},
        {nome: 'Notebook', preco: 3499.99},
        {nome: 'Computador', preco: 6999.99},
    ]

    res.render('index.ejs',
        {
            nome: nome,
            lang: lang,
            msg: ExibirMsg,
            produtos: Produtos,
        }
    );

});

app.get("/home", (req, res) => {
    res.render('home.ejs');

});

app.listen(8080, () => {
    console.log('App Rodando');

});