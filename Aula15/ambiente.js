let num = [5, 8, 0, 6]
console.log(`Nosso vetor é o ${num}`)
x = num.length
num[x] = 5
num.push(9) // adiciona valor depois do último elemento
console.log(`${num}`)
num.sort() // ordem crescente
console.log(`${num}`)
let c = 0
do {
    console.log(`elemento ${c}: ${num[c]}`)
    c++
} while (c < num.length);