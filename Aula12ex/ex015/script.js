function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtAno')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique dos dados e tente novamente!')    
    } else {
        var fSex = document.getElementsByName('radSex')
        var idade = ano - Number(fAno.value)
        var gen = ''
        if (fSex[0].checked) {
            gen = 'Homem'
        } else if (fSex[1].checked) {
            gen = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
    }
}