//DOM
var lista = ['banana', 'maca', 'limao']

var listaul = document.createElement('ul')

var mani = document.getElementsByTagName('main')
console.log(mani[0])
mani[0].appendChild(listaul)
console.log(mani[0].innerHTML)
var listaColocada = document.getElementsByTagName('ul')
console.log(listaColocada)
console.log(listaColocada[0])
for(var c = 0; c< lista.length; c++){
    var liFor = document.createElement("li")
    var textoLi = document.createTextNode(lista[c])
    liFor.appendChild(textoLi)
    listaColocada[0].appendChild(liFor)
    
}