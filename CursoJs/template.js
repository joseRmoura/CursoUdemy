let nome = "José Roberto de Moura"
let template = `
    Olá, ${nome}!
    como vai, tudo bem?
    Obrigado por utilizar nossos serviços! Sempre que necessário volte a nos contatar para que possamos ajuda-lo!

     att.Jrcompany
`
console.log(template)

const up = texto => texto.toUpperCase();
console.log(`Olá...${up('cuidado')}!`)