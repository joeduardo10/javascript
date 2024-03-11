let num = [5,1,4,2,9,3]
console.log(num)
num.sort()
num.push(1)
console.log(num)


console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor de num ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1){
    console.log('o valor não foi encontrado')
}else{
    console.log(`o valor 8 está na posição ${pos}`)
}









