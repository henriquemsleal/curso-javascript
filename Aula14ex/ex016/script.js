function contar() {
    var ini = document.getElementById('cIni')
    var fim = document.getElementById('cFim')
    var passo = document.getElementById('cPasso')
    var res = document.getElementById('res')
    res.innerHTML = ""

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // window.alert('[Erro] Faltam dados!')
        res.innerHTML = 'Impossível contar'
    } else {
        var vIni = Number(ini.value)
        var vFim = Number(fim.value)
        var vPasso = Number(passo.value)

        if (vPasso == 0) {
            res.innerHTML = '[Erro] O valor de Passo não pode ser 0! <br> Passo considerado como 1 <br><br>'
            vPasso = 1
        }
        res.innerHTML += `Contando: <br>`;

        if (vIni < vFim) {
            for (let cont = vIni; cont <= vFim; cont += vPasso) {
                res.innerHTML += ` ${cont} \u{1F449}`;
            }
        } else if (vIni > vFim) { // poderia ser outro if
            for (let cont = vIni; cont >= vFim; cont -= vPasso) {
                res.innerHTML += ` ${cont} \u{1F449}`;
            }
        }
    }
    res.innerHTML += ` \u{1F3C1}`
}