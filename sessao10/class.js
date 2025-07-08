class Jogo{
    constructor(titulo, genero, produtora, preco){
        this.titulo = titulo;
        this.genero = genero;
        this.produtora = produtora;
        this.preco = preco;
    }

    Abrir(){
        console.log(`O ${this.titulo} está sendo aberto.`);
    }

    Fechar(){
        console.log(`O ${this.titulo} está sendo fechado.`);
    }

    static Isso(){
        console.log("Classe Jogo")
    }

    Ficha(){
        console.log(`
            Titulo: ${this.titulo}
            Gênero: ${this.genero}
            Produtora: ${this.produtora}
            Preço: ${this.preco}
        `);
        this.Fechar();
    }
}

Jogo.Isso();

cs = new Jogo("Counter-Strike", "FPS", "Valve", 0);

cs.Abrir();
cs.Ficha();