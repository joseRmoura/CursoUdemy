//É utilizado colocar um valor padrão em parametros de funções porque pode ser que venha undefined e assim ocasionar erros.
//Estratégia 01:
function soma(a, b, c){
    a = a || 0
    b = b || 0
    c = c || 0
    return a + b + c
}

console.log(soma(),soma(1,2,3),soma(1,2))

function soma2(a,b,c){
    a = a !== undefined ? a:1
    b = 1 in arguments ? b:1
    c = isNaN(c) ? 1:c
    return a + b + c
}

console.log(soma2(2),soma2(0,0,0),soma(0,2,2))

//Valor Padrão do es 2015

function soma3(a=1,b=1,c=1){
    return a + b + c
}

console.log(soma3(0,0,0),soma3())
