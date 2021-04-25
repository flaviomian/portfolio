function contar() {
    let tab = document.getElementById('tabuada')
    let res = document.getElementById('resultado');

    if (tab.value.length == 0) {
        alert('Erro - Digite um número')
    } else {
        let n = Number(tab.value)
        res.innerHTML = ''
        for (let cont = 0; cont <= 10; cont++) {
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${cont*n}`
            res.appendChild(item)
        }
    }

}