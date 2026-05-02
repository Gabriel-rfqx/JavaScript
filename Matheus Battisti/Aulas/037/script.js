//Removendo elementos no HTML

var container = document.getElementById("teste")
console.log(container)
var paragrafo = document.querySelector(".paraTeste")
container.removeChild(paragrafo)

var subtitulo = document.querySelector("h2")
subtitulo.remove()
