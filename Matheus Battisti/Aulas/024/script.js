//Escopo

var x = 0
console.log(x)
function funcao(){
    var z = 1
    console.log(z)
    console.log(x)
}
function funcao2(){
    console.log(z)
    var z = 20
    console.log(z)
}
funcao()
funcao2()