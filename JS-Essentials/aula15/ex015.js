let vetor = [1, 3, 5, 4, 7, 8, 9, 2, 6, 0]
vetor.sort()

for (let i = 0; i < vetor.length; i++) {
    console.log(`A posição ${i} tem o valor ${vetor[i]}`)
}

for (let i in vetor) {
    console.log(`A posição ${i} tem o valor ${vetor[i]}`)
}