class Dado{
    constructor(dado){
        this.dado = dado;
    }

    Lados(){
        console.log(`Possui ${this.dado} lados`);
    }

    Rolar(){
        var num = Math.floor(Math.random() * this.dado+1);
        console.log(num);
    }

}

var dado = new Dado(Math.floor(Math.random() * 101));

dado.Lados();
dado.Rolar();