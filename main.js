// DECLARAÇÃO DE VARIÁVEIS
let operacao = prompt ("Informe a operação desejada: ")
let numero1 = Number (prompt("Informe o primeiro número: "))
let numero2 = Number (prompt("Informe o segundo número: "))

//VERIFICAR A OPERAÇÃO MATEMÁTICA SELECIONADA
if (operacao == "+") {
    let resultado = numero1 + numero2
    console.log("O resultado da soma é " + resultado + ".")
}

else if (operacao == "-") {
    let resultado = numero1 - numero2
    console.log("O resultado da subtração é " + resultado + ".")
}

else if(operacao == "*") {
    let resultado = numero1 * numero2
    console.log("O resultado da multiplicação é " + resultado + ".")
}

else if(operacao == "/") {
    let resultado = numero1 / numero2
    console.log("O resultado da divisão é " + resultado + ".")
}