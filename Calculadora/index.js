const title = 'Calculadora'
let messageOut = ""
let operador
let valorUm
let valorDois
let resultado

let sistema = false

// Update header text
document.querySelector('#body').innerHTML = title
console.log("Bem vindo! Calculadora JavaScript")

do {

    console.log("--------------------------------------------------------------------------------")
    sistema = confirm("Calculadora JavaScript clique em 'Ok' para continuar, 'Cancelar para Sair'")

    let operacao
    let valorUm = 0
    let valorDois = 0

    if(sistema) { 
        operacao = prompt("Selecione a operação - \n Adição [+], Subtração [-], ultiplicação [*], Divisão [/]")
        valorUm = parseInt(prompt("Entre com o Valor [1]"))
        valorDois = parseInt(prompt("Entre com valor [2]"))
    } else {
        console.log("Sair - Obrigado por utilizar nosso sistema!")
    }
      
    
    switch(operacao){
        case "+" :
            console.log("Adição")
            if(valorUm != null && valorDois != null) 
                resultado = valorUm + valorDois
            
            console.log(`Operação: ${valorUm} + ${valorDois}`)
            alert(`Resultado: ${resultado}`)
            console.log(`Resultado: ${resultado}`)
            sistema = true
            break
        
        case "-" :
            console.log("Subtração")
            if(valorUm != null && valorDois != null) 
                resultado = valorUm - valorDois
        
            console.log(`Operação: ${valorUm} - ${valorDois}`)
            alert(`Resultado: ${resultado}`)
            console.log(`Resultado: ${resultado}`)
            sistema = true
            break

        case "*" :
            console.log("Subtração")
            if(valorUm != null && valorDois != null) 
                resultado = valorUm * valorDois
        
                console.log(`Operação: ${valorUm} * ${valorDois}`)
                alert(`Resultado: ${resultado}`)
                console.log(`Resultado: ${resultado}`)
            sistema = true
            break
    
        case "/" :
            console.log("Divisão")
            if(valorUm != null && valorDois != null) 
                resultado = valorUm / valorDois
        
                console.log(`Operação: ${valorUm} / ${valorDois}`)
                alert(`Resultado: ${resultado}`)
                console.log(`Resultado: ${resultado}`)
            sistema = true
            break

    }

} while(sistema)



