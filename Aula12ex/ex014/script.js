function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // hora = 12
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.backgroundColor = 'rgb(130, 130, 218)'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.backgroundColor = 'rgb(163, 126, 56)'
    } else {
        img.src = 'noite.png'
        document.body.style.backgroundColor = 'rgb(82, 53, 53)'
    }
}
