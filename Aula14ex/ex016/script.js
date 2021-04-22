function contar() {
    var ini = document.getElementById('cIni')
    var fim = document.getElementById('cFim')
    var passo = document.getElementById('cPasso')
    var res = document.getElementById('res')
    var vIni = ini.value
    var vFim = fim.value
    var vPasso = passo.value

    if (vIni.length == 0 || vFim.length == 0 || vPasso.length == 0) {
        window.alert('[Erro] Faltam dados!')
    } else {
        res.innerHTML = `Contando: <br>`;
        if (vIni < vFim) {
            for (cont = Number(vIni); cont <= Number(vFim); cont += Number(vPasso)) {
                res.innerHTML += ` ${cont} \u{1F449}`;
            }
        } else if (vIni > vFim) {
            for (cont = Number(vIni); cont >= Number(vFim); cont -= Number(vPasso)) {
                res.innerHTML += ` ${cont} \u{1F449}`;
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}