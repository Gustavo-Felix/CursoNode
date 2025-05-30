var http = require('http');

http.createServer((req, res) => {
    res.end('<h1>Bem-vindo ao meu site!</h1>')
}).listen(8080);

console.log('Meu servidor está rodando!');