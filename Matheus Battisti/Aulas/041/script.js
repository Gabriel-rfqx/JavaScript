// Alterando CSS com JS



var titulo = document.getElementById("title")

titulo.style.color = 'red'
titulo.style.backgroundColor = 'yellow'

var subtitulo = document.querySelector('h2')

subtitulo.style.cssText = 'Color: green; Background-Color: pink; font-size: 3em;'

var p = document.querySelector("p")
p.style.opacity = 0