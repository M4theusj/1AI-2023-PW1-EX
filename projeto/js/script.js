function olaMundo(){
    alert("Olá mundo!")



}

function mostraNome(){
    const nome = prompt("Digite seu nome:")
    console.log(nome)
}

function concatenaPalavras(){
    let p1 = prompt("Digite a primeira palavra:")
    let p2 = prompt("Digite a segunda palavra:")
    let p3 = p1 + p2
    console.log(p3)
}

function somaNumeros(){
    let n1 = parseInt(prompt("Digite o primeiro número"))
    let n2 = parseInt(prompt("Digite o segundo número"))
    let resultado = n1 + n2
    console.log(resultado)
}

function subtraiNumeros(n1, n2) {
    return n1 - n2;
}

const resultado = subtraiNumeros(5, 3);
console.log(resultado);


function criaObjeto(){
    usuario = {}
    var nome = (prompt("Digite seu nome"))
    var idade = (prompt("Digite sua idade"))
    var time = (prompt("Digite seu time favorito"))
    usuario.nome = nome
    usuario.idade = idade
    usuario.time = time
    console.log(usuario)

}

function calculadora() {
    
    const operacao = prompt("Digite a operação (somar, subtrair, multiplicar ou dividir):");
    const numero1 = parseFloat(prompt("Digite o primeiro número:"));
    const numero2 = parseFloat(prompt("Digite o segundo número:"));

   
    switch (operacao) {
        case "somar":
            console.log(`Resultado: ${numero1 + numero2}`);
            break;
        case "subtrair":
            console.log(`Resultado: ${numero1 - numero2}`);
            break;
        case "multiplicar":
            console.log(`Resultado: ${numero1 * numero2}`);
            break;
        case "dividir":
            if (numero2 !== 0) {
                console.log(`Resultado: ${numero1 / numero2}`);
            } else {
                console.log("Erro: Divisão por zero não é permitida.");
            }
            break;
        default:
            console.log("Operação inválida.");
    }
}


function mudaConstante(){
    const nome = prompt('Digite seu nome:');
    console.log('Nome digitado:', nome);
  
    const novoNome = prompt('Digite um novo nome:');
    console.log('Novo nome digitado:', novoNome);
  
    
    nome = novoNome; 
  }








