function sendEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var Error = true;
            if(!Error){
                resolve(); // Promise OK
            } else {
                reject(); // Promise Falhou
            }

        }, 4000);
    });
}

sendEmail("Olá mundo", "pessoa").then(() => {
    console.log("Deu Certo");
}).catch(() => {
    console.log("Falhou");
});