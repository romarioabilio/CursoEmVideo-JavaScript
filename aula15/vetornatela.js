var num = [5,9,6,7,2,3,4,6,1,1,7]
 num.sort()

/*while(n < num.length){
    num.sort()
    console.log(`A posição ${n} tem o valor ${num[n]}`)
    n++

}
*/
for (var n in num){
    console.log(`A posição ${n} tem o valor ${num[n]}`)
}
console.log(num.indexOf(15))
//retorna -1 pois não existe

