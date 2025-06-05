const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // Estou dizendo para usar o EJS como View Engine

app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var ExibirMsg = false;
    res.render('index.ejs',
        {
            nome: nome,
            lang: lang,
            msg: ExibirMsg,
        }
    );

});

app.get("/home", (req, res) => {
    res.render('home.ejs');

});

app.listen(8080, () => {
    console.log('App Rodando');

});