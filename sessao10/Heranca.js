class Animal{

    constructor(nome, idade, preco){
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;

    }

    Metodo(){
        console.log("Classe Mãe");
    }

    Checar(){
        console.log(this.nome, this.idade, this.preco);
    }

    ChecarQuantidade(){
        return 10;
    }
}

class Cachorro extends Animal{
    
    constructor(nome, idade, preco, raca, peso){
        super(nome, idade, preco);
        this.raca = raca;
        this.peso = peso;

    }

    Metodo(){
        super.Metodo();
        console.log(this, "\nClasse Filha")
    }

}

var dog = new Cachorro("Duke", 5, 89.90, "Pitbull", 12)

dog.Checar()
dog.Metodo()