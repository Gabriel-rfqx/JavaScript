//Metodos de Arrays pt2

/*

splice - adiciona/remove um elemento entre o outros (posicao, se quer deletar, novo elemento)
indexOf
join - transforma uma array em uma string
reverse - reverte a ordem dos elementos de uma array
*/


let arr = ['abd', 'asd', 'aga']
console.log(arr)
arr.splice(1, 0, "suroa")
console.log(arr)
arr.splice(2, 1)
console.log(arr)
console.log(arr.indexOf('aga'))
console.log(arr.join(' - '))
console.log(arr.reverse())
console.log(arr.sort())