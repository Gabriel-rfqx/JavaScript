//Adicionando elementos no HTML

var novoParagrafo = document.createElement("p")

console.log(novoParagrafo)
console.log(typeof novoParagrafo)

var texto = document.createTextNode("Este e o conteudo, que ficara dentro do paragrafo. ")

console.log(texto)

novoParagrafo.appendChild(texto)

console.log(novoParagrafo)

var main = document.querySelector("main")

console.log(main)

main.appendChild(novoParagrafo)

