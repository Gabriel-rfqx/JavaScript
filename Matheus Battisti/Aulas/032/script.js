//this 


let pessoa = {
    nome: 'Gabriel',
    idade: 19,

    fazerAniversario: function(){
        this.idade += 1
    }
}

console.log(this)
console.log(pessoa.idade)
pessoa.fazerAniversario()
console.log(pessoa.idade)