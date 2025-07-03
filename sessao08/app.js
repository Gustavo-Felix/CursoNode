// var nome1 = "Gustavo"; // Pode Mudar
// const nome2 = "Gustavo"; // Não pode mudar e é obrigatório inicializar

let nome3 = "Gustavo1"; // Global, local e de bloco
// Escopo
var nome4 = "Gustavo2"; // Global, local

function func1(){
    var sobrenome = "Silva"; // Local
    let sobrenome2 = "Silva2"; // Local
    console.log(nome3, sobrenome);
}

function func2(){
    //console.log(nome4, sobrenome2);
}

func1();
func2();

let a = 5; // Global, local e de bloco

// bloco 
if(true){
    let b = 10; // bloco
    console.log(a + b);
}