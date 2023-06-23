var amigo = {nome:'José',sexo: "M", peso:85.4, engordar(p){
    this.peso += p
    console.log('Engordou !')
}}
console.log(amigo.peso)
amigo.engordar(2)
console.log(amigo.peso)


