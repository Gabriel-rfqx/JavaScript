//Metodos de string

/*

length
indexOf (retorna o index onde comeca a letra/palavra solicitada)
lastIndexOf() (retorna o index onde comeca a ultima aparicao da letra/palavra solicitada)
slice (recorta uma palavra de um texto)
replace 
*/


let no = 'Gabriel'
console.log(no.length)
console.log(no.indexOf("bri"))
let x = 'Misca musca mikey mouse mikey'
console.log(x.indexOf('mikey'))
console.log(x.lastIndexOf('mikey'))
let x1 = x.slice(x.indexOf('mikey'), x.length)
console.log(x1)
let x2 = x1.replace('mikey', 'mykei')
console.log(x2)