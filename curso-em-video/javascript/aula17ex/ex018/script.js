let lis = []

function addnum() {
    let num = document.getElementById('numtxt')
    let listanum = document.getElementById('listanum')

    if (num.value > 100 || num.value <= 0 || num.value == NaN) {
        alert('Numero digitado inválido.')
    } else {
        lis.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        listanum.appendChild(item)
        console.log(lis)
        console.log(lis.length)
        lis.sort()

    }
}




function resultado() {
    let res = document.getElementById('res')
    let soma = 0
    for (let c = 0; c < lis.length; c++) {
        soma += lis[c]
    }
    res.innerHTML = `Ao todo foram adicionados ${lis.length} números.<br>`
    res.innerHTML += `O menor número adicionado foi ${lis[0]}.<br>`
    res.innerHTML += `O maior número adicionado foi ${Math.max.apply(null, lis)}.<br>`
    res.innerHtml += `A soma de todos os valores é ${soma}`
}