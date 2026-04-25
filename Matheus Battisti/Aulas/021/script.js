//Break e continue

/*

break encerra a instrucao em execucao

continue pula para a proxima execucao

*/

var arr = [1, 3, 5, 9]

for(var c= 0; c<=10;c++){
    if(arr.includes(c)){
        continue
    }
    console.log(c)
}