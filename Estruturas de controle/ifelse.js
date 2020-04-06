/*const ImprimirNota = function(nota){
    if(nota > 7){
        console.log('Aprovado!')
    }else{
        console.log('Reprovado!')
    }
}

ImprimirNota(6)
ImprimirNota(9)
ImprimirNota('epa!')*/

Number.prototype.entre = function(comeco,fim){
    return this >= comeco && this <= fim
}

function ImprimiValor(valor){
    if(isNaN(valor) == false ){
        if(valor.entre(9,10)){
            console.log('Aprovado muito bem')
        }
        else if(valor.entre(6,8.99)){
            console.log('Aprovado')
        }
        else if(valor.entre(0,5.99)){
            console.log('Reprovado')
        }
        else{
            console.log('Nota inválida')
        }
    }
    else{
        console.log('Digite um numero valido!')
    }    
}

ImprimiValor(7)
ImprimiValor(6)
ImprimiValor(5)
ImprimiValor(3)
ImprimiValor(0)
ImprimiValor('asdasdasdasd')