//let e const + escopo
const Y = 10

let x =12
console.log(x)
if(true){
    //console.log(x)
    let x = 5
    const Y = 15
    console.log(x)
    console.log(Y)
}
console.log(x)
console.log(Y)
