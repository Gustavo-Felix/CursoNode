function sendEmail(corpo, para){
    setTimeout(() => {
        console.log(`
            Para: ${para}
            ----------------------------
            ${corpo}
            ----------------------------
            De: Gustavo Félix
            `)
    }, 8000)
}

console.log("Seu e-mail foi enviado com sucesso!")
sendEmail("Oi, este é um teste de programação assíncrona.", "gustavo")
console.log("Enviado!")