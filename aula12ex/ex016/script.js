function verificar(){
    var data = new Date()
    var ano = data.getFullYear() 
    var anonasc = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (anonasc.value.length == 0  || anonasc.value > ano){
        window.alert('[ERRO] Tente Novamente !')
    }else{
        var fsexo = document.getElementsByName('radsex')
        var idade = ano - Number(anonasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10  ){
                //CRIANÇA
                img.setAttribute('src', 'bebeM.jpg' )
            }    
            else if(idade<21){
                //JOVEM
                img.setAttribute('src', 'jovemM.jpg' )
            }
            else if(idade < 50 ){
                //ADULTO
                img.setAttribute('src', 'adulto.jpg' )

            }else{
                //IDOSO
                img.setAttribute('src', 'idoso.jpg' )
            }


        }else if (fsexo[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10  ){
                //CRIANÇA
                img.setAttribute('src', 'bebeF.jpg' )
            }    
            else if(idade<21){
                //JOVEM
                img.setAttribute('src', 'jovemF.jpg' )
            }
            else if(idade < 50 ){
                //ADULTO
                img.setAttribute('src', 'adulta.jpg' )

            }else{
                //IDOSO
                img.setAttribute('src', 'idosa.jpg' )
            }

        }
        
        res.innerHTML = `Detectamos um(a) ${genero} de ${idade} anos !`
        res.appendChild(img)
    }
   

}