let valores = [8,1,7,4,2,9]

/*for(let pos = 0; pos < valores.length; pos++){
    console.log(`a posição ${pos} contém os valores ${valores[pos]} valores`)
}*/
valores.sort()
for(let pos in valores){
    console.log(valores[pos])
}