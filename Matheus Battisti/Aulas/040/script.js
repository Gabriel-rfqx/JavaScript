//Alterando atributos de elementos no HTML

//Adicionando atributos 
var el1 = document.querySelector("#title")

el1.setAttribute('class', 'Titulou')

var btn = document.getElementById("butao")

btn.setAttribute('disabled', 'disable')


// Removendo atributos

var para = document.getElementsByClassName('paraTeste')[0]

para.removeAttribute('class')