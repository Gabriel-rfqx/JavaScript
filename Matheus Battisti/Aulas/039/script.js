//Trocando elementos no HTML


var el3 = document.createElement('h3')
var texto = document.createTextNode("Texto de exemplo")
el3.appendChild(texto)
console.log(texto)
console.log(el3)



//pegando o elemento que deseja trocar
var titulo = document.querySelector('h1')
console.log(titulo)


//pegando o pai do elemento
// var paiTitulo = document.querySelector('body')
var paiTitulo = titulo.parentNode
console.log(paiTitulo)

paiTitulo.replaceChild(el3, titulo)

