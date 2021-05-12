let eNum = document.getElementById('cNum')
let eLista = document.getElementById('sel')
let eRes = document.getElementById('res')
let valores = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNum(eNum.value) && !inLista(eNum.value, valores)) {
        valores.push(Number(eNum.value))
        let item = document.createElement('option')
        item.text = `Valor ${eNum.value} adicionado.`
        eLista.appendChild(item)
        eRes.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já adicionado.')
    }
    eNum.value = ''
    eNum.focus()
}

function finalizar() {
     if (valores.length == 0) {
        window.alert('Adicione valores, antes de finalizar!')
     } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            media = soma / tot
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        eRes.innerHTML = ''
        eRes.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        eRes.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        eRes.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        eRes.innerHTML += `<p>A soma dos números adicionados é ${soma}.</p>`
        eRes.innerHTML += `<p>A média dos números adicionados é ${media}.</p>`
     }
}
