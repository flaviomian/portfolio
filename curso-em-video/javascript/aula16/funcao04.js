function fatorial(n) {
    let fat = 1
    for (let cont = n; cont > 1; c--) {
        fat *= cont
    }
}

console.log(fatorial(5))