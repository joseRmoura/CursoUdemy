/*function Pessoa(){
    this.idade = 0

    setInterval(()=>{
        this.idade++
        console.log(this.idade)
    },1000)
}

new Pessoa*/

let ComparaComThis = function(param){
    console.log(this === param)
}

ComparaComThis(global)

const obj = {}
ComparaComThis = ComparaComThis.bind(obj)
ComparaComThis(global)
ComparaComThis(obj)