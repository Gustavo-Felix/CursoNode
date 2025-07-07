function getId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var Error = false;
            if(!Error){
                resolve(5); // Promise OK
            } else {
                reject("Id não encontrado!"); // Promise Falhou
            }
        }, 1000)
    })
}

function getEmailBD(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var Error = false;
            if(!Error){
                resolve({email: "gustavo@gmail.com"}); // Promise OK
            } else {
                reject("Não encontrado no banco!"); // Promise Falhou
            }
        }, 2000);
    });
}

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

getId().then((id) => {
    getEmailBD(id).then((email) => {
        sendEmail("Hello World!", email).then(() => {
            console.log("Email enviado! para o usuário com o id: " + id);
        }).catch((err) => {
            console.log(err);
        });
    });
});