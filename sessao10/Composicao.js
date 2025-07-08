class Escritor{
    Escrever(){
        console.log("Escrevendo...")
    }
}

class ManipuladorDeLivro{
    constructor(nome){
        this.nome = nome;
        this.escritor = new Escritor();
    }

}

mlivros = new ManipuladorDeLivro("MLivros");
mlivros.escritor.Escrever(); // Reutilizando métodos de outras classes