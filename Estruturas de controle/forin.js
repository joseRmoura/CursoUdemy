const notas = [7, 7.4, 8, 8.8, 9, 9.5, 10]

for(i in notas){
    console.log(i,notas[i])
}

const pessoa = {
    nome:'jose',
    idade:24,
    genero:'masculino',
    estadoCivil:'solteiro',
    endereco:{
        rua:'av.floriano',
        numero:5464
    },
    peso: 85
}

for(atributo in pessoa){
    console.log(atributo,'= ' + pessoa[atributo])
}