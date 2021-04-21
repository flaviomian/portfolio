function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    //validação da caixa de texto 
    if (fano.value.length == 0 || fano.value > ano) {
        alert('ERRO. Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            if (idade >= 0 && idade < 10) {
                genero = 'Criança'
                img.setAttribute('src', 'kidboy.jpg')
                document.body.style.background = '#176925'
            } else if (idade < 21) {
                genero = 'Garoto'
                img.setAttribute('src', 'youngboy.jpg')
                document.body.style.background = '#ff9100'
            } else if (idade < 50) {
                genero = 'Homem'
                img.setAttribute('src', 'men.jpg')
                document.body.style.background = '#9ea7a0'
            } else {
                genero = 'Idoso'
                img.setAttribute('src', 'oldmen.jpg')
                document.body.style.background = '#6190af'
            }

        } else {
            if (idade >= 0 && idade < 10) {
                genero = 'Criança'
                img.setAttribute('src', 'kidgirl.jpg')
                document.body.style.background = '#87a58b'
            } else if (idade < 21) {
                genero = 'Garota'
                img.setAttribute('src', 'younggirl.jpg')
                document.body.style.background = '#fdb5d0'
            } else if (idade < 50) {
                genero = 'Mulher'
                img.setAttribute('src', 'woman.jpg')
                document.body.style.background = '#fd3030'
            } else {
                genero = 'Idosa'
                img.setAttribute('src', 'oldwoman.jpg')
                document.body.style.background = '#693333'
            }
        }
        res.innerHTML = `Detectado: ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}