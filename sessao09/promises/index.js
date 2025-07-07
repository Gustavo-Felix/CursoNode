function sendEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var Error = false;
            if(!Error){
                resolve({time: 6, to: "pessoa"}); // Promise OK
            } else {
                reject("Fila cheia"); // Promise Falhou
            }

        }, 4000);
    });
}

sendEmail("Olá mundo", "pessoa").then(({time, to}) => {
    console.log(`
    Time: ${time}
    -----------------------
    To: ${to}`);
}).catch((erro) => {
    console.log(erro);
});