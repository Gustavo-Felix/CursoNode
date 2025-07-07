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

function getUsers(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: "Gustavo", lang: "JS"},
                {name: "Bruno", lang: "Python"},
                {name: "Félix", lang: "Java"}
            ]);
        }, 3000);
    });
}

async function main(){ // async - Torna a função assíncrona e permite o uso do await 
    var usuarios = await getUsers(); // await - espera concluir a coleta de dados - dependendo da forma de uso, pode ser mais uma desvantagem do que uma vantagem de uso 
    console.log(usuarios);
} // Os dois juntos substituem o uso do Promise

main();


// getId().then((id) => {
//     getEmailBD(id).then((email) => {
//         sendEmail("Hello World!", email).then(() => {
//             console.log("Email enviado! para o usuário com o id: " + id);
//         }).catch((err) => {
//             console.log(err);
//         });
//     });
// });

