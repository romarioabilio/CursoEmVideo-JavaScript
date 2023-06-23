var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()

console.log(`Agora são exatamente ${hora}:${minutos}`)
if(hora < 12 && minutos < 60 ){
    console.log(`BOM DIA !`)
}else if(hora < 18 && minutos < 60){
    console.log(`BOA TARDE !`)
}else{
    console.log(`BOA NOITE !`)
}