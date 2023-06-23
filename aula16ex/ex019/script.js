var num = window.document.getElementById('fnum')
num.value = ''
num.focus()
var lista = window.document.getElementById('lista')
var res = window.document.getElementById('res')
numNumber = Number(num.value)
var valores = []

function isNumero(n){

    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        window.alert('O número tem que ser de 1 a 100')
        return false
    }
}

function inLista(n , listav){
    if (listav.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
}

function adicionar(){
    
    
    if(num.value.length == 0){
        window.alert('Você não adicionou o número !!')
    }


    else if(isNumero(num.value) && inLista(num.value , valores) == false){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado com sucesso !`
        item.value = `${num.value}`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else if (inLista(num.value,valores) == true){
        window.alert('Número ja existe')
    }
    num.value = ''
    //zerando input visual
    num.focus()
    //coloca a seleçao do mouse de volta  ao input visual
}
function finalizar(){
    res.innerHTML  = ''
    if(valores.length == 0){
        window.alert('adicione valores antes de finalizar')
    }
    else{
        var total = valores.length
        maior = valores[0]
        menor = valores[0]
        soma = 0 
        media = 0 
        for(var pos in valores){
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor ){
                menor = valores[pos]
            }
            soma += valores[pos]
            media =  soma / valores.length





        }
    res.innerHTML += `<p>quantidade de números adicionados : ${total}</p>`
    res.innerHTML += `<p>Menor : ${menor}</p>`
    res.innerHTML += `<p>Maior : ${maior}</p>`
    res.innerHTML += `<p>Soma : ${soma.toFixed(2)}</p>`
    res.innerHTML += `<p>Media : ${media.toFixed(2)}</p>`
    }
    num.value = ''
    num.focus()
}  

