function gerarTabuada(){
    var num = window.document.getElementById('num')
    var numN = Number(num.value)
    var mul = 0
    var res = window.document.getElementById('seltab')
    res.innerHTML = " "
    if(num.value.length == 0){
        window.alert('[ERRO] - Digite um número por favor !')

    }
    else{
        while (mul <= 10){
            var item = document.createElement('option')
            item.text = `${numN} X ${mul} = ${numN * mul}`
            item.value = `${mul}`
            res.appendChild(item)
            mul++
        }
    }
    /*while (mul < 11 ){
        res.innerHTML += `${numN} X ${mul} = ${numN * mul}`
        res.innerHTML += `<br></br>`
        mul++
    }
    */
}