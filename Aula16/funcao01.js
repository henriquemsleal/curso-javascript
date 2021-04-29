function parimpar(n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

let n1 = 20
let res = parimpar(n1)

console.log(`O número ${n1} é ${res}`)

