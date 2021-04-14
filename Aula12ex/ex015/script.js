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
        var img = document.createElement('img') //cria tag img
        img.setAttribute('id', 'foto') //id para o elemento criado
        if (fSex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'menino.png')
            } else if (idade >= 13 && idade < 21) {
                img.setAttribute('src', 'rapaz.png')
            } else if (idade >=21 && idade < 60) {
                img.setAttribute('src', 'homem.png')
            } else {
                img.setAttribute('src', 'senhor.png')
            }
        } else if (fSex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'menina.png')
            } else if (idade >= 13 && idade < 21) {
                img.setAttribute('src', 'moca.png')
            } else if (idade >=21 && idade < 60) {
                img.setAttribute('src', 'mulher.png')
            } else {
                img.setAttribute('src', 'senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}