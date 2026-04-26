//Metodos de Arrays

/*

length
push - add elementos no fim do array
pop - remove o ultimo elementos
unshift - add elementos no inicio da array
shift - removo do inicio
Array.isArray()
*/


let arr = ['abd', 'asd', 'aga']

console.log(arr.length)
arr.push("Coisa boba")
console.log(arr)
arr.pop()
console.log(arr)
arr.unshift('213')
console.log(arr)
arr.shift()
console.log(arr)
console.log(Array.isArray(arr))