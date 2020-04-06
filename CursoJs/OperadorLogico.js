function compras(tb1,tb2){
    const ComprarSorvete = tb1 || tb2
    const ComprarTV50 = tb1 && tb2
    const ComprarTV32 = tb1 != tb2
    const manterSaudavel = !ComprarSorvete
    return {ComprarSorvete, ComprarTV50, ComprarTV32, manterSaudavel}
}

console.log(compras(true,true))
console.log(compras(true, false))
console.log(compras(false,false))