let nome = 'josé Roberto de moura'

for(let letra of nome.replace(/\s/g,"") ){
    letra.trim()
    console.log(letra)
}