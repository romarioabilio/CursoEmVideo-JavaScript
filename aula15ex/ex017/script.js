function contar(){

    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')
    var inicion = Number(inicio.value) 
    var fimn = Number(fim.value)
    var passon = Number(passo.value)
    res.innerHTML = " "
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO] - Preencha todos os dados !")
    }
    else if(passon == 0){
        window.alert("[ERRO] - Passo não pode ser 0 !")

    }
    else if(inicion > fimn){
        while(inicion > fimn){
            res.innerHTML += `> ${inicion}`
            res.innerHTML += " "
            inicion -= passon 
            if(inicion == fimn) {
                res.innerHTML += `> ${inicion}`
                res.innerHTML +=  ` > FIM!` 
                break
            }
            else if(inicion < fimn){
                res.innerHTML +=  ` > FIM!` 
                break    

            }
        } 
    }           
    else{
        while(inicion < fimn){
            res.innerHTML += `> ${inicion}`
            res.innerHTML += " "
            inicion += passon 
            if(inicion == fimn) {
                res.innerHTML += `> ${inicion}`
                res.innerHTML +=  ` > FIM!` 
                break
            }
            
            else if(inicion > fimn){
                res.innerHTML +=  ` > FIM!` 
                break
            }
        }
    }




}