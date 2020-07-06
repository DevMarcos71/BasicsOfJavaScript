//Recursividade
function fatorial(n){
    if(n == 0 || n == 1){
        return 1
    } else {
        return n = n * fatorial(n-1)
    }
}

/* Outra Forma
function fatorial(n){
    return n > 1 ? n*=fatorial(n-1) : 1
}*/

console.log(fatorial(5))