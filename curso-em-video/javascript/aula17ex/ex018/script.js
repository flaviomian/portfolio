let lis = []
let num = document.getElementById('numtxt')
let listanum = document.getElementById('listanum')
let res = document.getElementById('res')

function isNumber(n) {
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

function addnum() {

    if (isNumber(num.value) && !inLista(num.value, lis)) {
        lis.push(Number(num.value))
        let item = document.createElement('option')
        item.setAttribute('id', 'newobj')
        item.text = `Valor ${num.value} adicionado.`
        listanum.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Numero digitado inválido ou já registrado.')
    }
    num.value = ""
    num.focus()
}


function resultado() {
    if (lis.length == 0) {
        res.innerHTML = 'Adicione valores para verificar.'
    } else {
        let soma = 0
        let media = 0
        let maior = lis[0]
        let menor = lis[0]

        for (let pos in lis) {
            soma += lis[pos]
            if (lis[pos] > maior)
                maior = lis[pos]
            if (lis[pos] < menor)
                menor = lis[pos]
        }
        media = soma / lis.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo foram adicionados ${lis.length} números.</p>`
        res.innerHTML += `<p>O menor número adicionado foi ${menor}.</p>`
        res.innerHTML += `<p>O maior número adicionado foi ${maior}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A média de todos os valores é ${media.toFixed(2)}.</p>`
    }
}