//Acessando DOM

//Tagname
var titulo = document.getElementsByTagName('h1')[0]
console.log(titulo)
console.log(typeof titulo)
var lis = document.getElementsByTagName('li')
console.log(lis)
console.log(lis[2])
console.log(typeof lis)

//Id
var para = document.getElementById('paragrafro')
console.log(para)
console.log(typeof para)

// class

var classes  = document.getElementsByClassName("Itens")
console.log(classes)
console.log(classes[0])