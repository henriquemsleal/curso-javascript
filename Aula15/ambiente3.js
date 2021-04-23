let valores = [8, 1, 7, 4, 2, 9]
console.log(`O array "valores" tem ${valores.length} elementos.\nSão: ${valores}`)

for (let indice in valores) {
    console.log(`A posição ${indice} é: ${valores[indice]}`)     
}

console.log(valores)

for (let i in valores) {
    let v = valores[i]
    let pos = valores.indexOf(v)
    console.log(`O valor ${v} está na posição ${pos}`)
}

