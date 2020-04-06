function aprovacao(valor) {
    if(!valor){
        console.log('Valor não permitido ' + valor)
    }
}

aprovacao(null)
aprovacao(undefined)
aprovacao(NaN)
/*aprovacao('')
aprovacao(0)
aprovacao('d')
aprovacao(-1)
aprovacao(' ')
aprovacao([])
aprovacao([1,2])
*/