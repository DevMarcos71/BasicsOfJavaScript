let num = [1, 5, 3, 2, 10, 32, 34, 15, 88]
num[5] = 99

num.push(7, 61, 52)

console.log(`O vetor tem ${num.length} posições`)

console.log(`Os valores do Array até agora são: ${num}`)

console.log(`O primeiro valor do Array é ${num[0]}`)

console.log(`O Index do Array para o valor 88 é: ${num.indexOf(88)}`)

console.log(`Os valores em ordem crescente são: ${num.sort()}`)