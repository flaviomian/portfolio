function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //manhã
        img.src = 'manha.jpg'
        document.body.style.background = "#fae2cc"
    } else if (hora >= 12 && hora < 18) {
        //tarde
        img.src = 'tarde.jpg'
        document.body.style.background = "#a6cae7"
    } else {
        //noite
        img.src = 'noite.jpg'
        document.body.style.background = "#3a293a"
    }
}