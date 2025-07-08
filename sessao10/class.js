class Jogo{
    constructor(titulo, genero, produtora, preco){
        this.titulo = titulo
        this.genero = genero
        this.produtora = produtora
        this.preco = preco
    }

    Abrir(){
        console.log(`O ${this.titulo} está sendo aberto.`)
    }
}

cs = new Jogo("Counter-Strike", "FPS", "Valve", 0)

cs.Abrir()