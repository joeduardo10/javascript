var agora = new Date()
var diasem = agora.getDay()
console.log(diasem)
/*
0 = domingo
1 = segunda
2 = terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sabado
*/
switch(diasem){
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('quarta-feira')
        break
    case 4:
        console.log('quinta-feira')
        break
    case 5:
        console.log('sexta-feira')
        break
    case 6:
        console.log('Sabado')
    default:
        console.log('[ERRO] dia invalido')
        break
}