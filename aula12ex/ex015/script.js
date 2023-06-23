function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
if(hora >= 0 && hora < 12 ){
    // BOM DIA !!  
    msg.innerHTML = `Agora são ${hora}:${minutos} horas da manhã !`
    img.src = "manhã.jpg"
    document.body.style.background = '#e2cd9f'
}
else if(hora >= 12 && hora < 18){
    //BOA TARDE !!
    msg.innerHTML = `Agora são ${hora}:${minutos} horas da tarde !`
    img.src = "tarde.jpg"
    document.body.style.background = '#b9846f'
}
else{
    //BOA NOITE !!
    msg.innerHTML = `Agora são ${hora}:${minutos} horas da noite!`
    img.src = "noite.jpg"
    document.body.style.background = '#515154'
}

}