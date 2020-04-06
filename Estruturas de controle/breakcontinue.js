/*function randomNumber(min,max){
    var numero = Math.floor(Math.random() * (max - min) + min)
    return numero
}

while(true){
    let valor = randomNumber(0,5)
    if(valor == 5){
        console.log(valor)
        break
    }
    else{
        console.log(valor)
    }
}*/

const vet = [1, 2, 3, 4, 5, 5.4, 6]

for(x in vet){
    if(vet[x] == 5.4){
        console.log(`x = ${vet[x]}`)
        break
    }else{
    console.log(`x = ${vet[x]}`)
    }
}