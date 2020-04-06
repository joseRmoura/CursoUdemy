function rand({min = 0, max = 1000}){
    const resultado = Math.random() * (max - min) + min
    return Math.floor(resultado)
}

const obj = {min:40,max:50}
console.log(rand({min:0,max:100}))
console.log(rand(obj))