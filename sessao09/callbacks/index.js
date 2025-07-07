function sendEmail(corpo, para, callback){
    setTimeout(() => {
        var Error = false;
        console.log(`
            Para: ${para}
            ----------------------------
            ${corpo}
            ----------------------------
            De: Gustavo Félix
            `);
        if(Error){
            callback("O envio do email falhou!");
        }else{
            callback();
        }
    }, 8000);
}

console.log("Seu e-mail foi enviado com sucesso!");
sendEmail("Oi, este é um teste de programação assíncrona.", "gustavo", (erro) => {
    if(erro == undefined){
        console.log("Tudo OK!");
    }else {
        console.log("Ocorreu um erro:" + erro);
    }
});