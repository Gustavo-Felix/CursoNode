const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // Estou dizendo para usar o EJS como View Engine
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render('index.ejs');

});

app.get("/perguntar", (req, res) => {
    res.render('perguntar.ejs');

});

app.post("/salvarPerguntas", (req, res) => {
    res.send("Formulário Recebido!");

});

app.listen(8080, () => {
    console.log('App Rodando');

});