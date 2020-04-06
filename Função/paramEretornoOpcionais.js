function Area(largura,altura){
    const area = largura * altura
    if(area > 20){
        console.log(`valor nao permitido: ${area} m²`)
    }
    else if(area < 20){
        return console.log(area)
    }
}

Area(10,10)