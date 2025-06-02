const express = require('express'); // importando o express
const app = express(); // iniciando o express

app.get("/", (req, res) => {
        res.send("<h1>Bem-vindo!</h1>")
    }
);

app.get("/blog", (req, res) => {
        res.send("Bem-vindo ao blog!")
    }
);

app.get("/post", (req, res) => {
    res.send("Bem-vindo ao meu post!")
}
);

app.listen(8080, (err) => {
    if(err){
        console.log('Ocorreu um erro!', err)
    }
    else{
        console.log('Servidor iniciado com sucesso!')
    }
})

