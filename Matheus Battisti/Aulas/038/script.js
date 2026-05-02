//Adicionando elementos no HTML

var elemento = document.createElement("div")

elemento.classList = 'container'

console.log(elemento)

var teste = document.getElementById("teste")

console.log(teste)

teste.appendChild(elemento)

//insertBefore - insere antes
console.log(teste)
var p = document.createElement("p")
p.appendChild(document.createTextNode("Meu pau!"))
p.classList = 'CLAsseJAVA'
console.log(p)
var divCriada = document.querySelector(".container")
console.log(divCriada)
teste.insertBefore(p, divCriada)