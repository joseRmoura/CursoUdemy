function rand([min=0,max=1000]){
    if(min>max)[min,max] = [max,min]
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(rand([60,100]))

const vet = [60,100]
console.log(rand(vet))

let a = 2

var b = --a
var c = a++
console.log(b,c)
