const soma = function(x,y){
    return x + y
}

const result = function(a,b,func=soma){
    console.log(func(a,b))
}

result(3,7,function(x,y){
    return x - y
})

result(3,7,(x,y) => x + y)