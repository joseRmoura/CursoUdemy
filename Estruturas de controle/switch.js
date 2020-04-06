function impriminota(nota){
    switch(Math.floor(nota)){
        case 10:
            console.log('nota boa')
            break
        case 6:
            console.log('nota mais ou menos')
            break
        default:
            console.log('nota mediana')
    }
}

impriminota(10.9)