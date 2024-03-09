function calcular(){
    var nro = document.getElementById('id_tabuada')
    var res = document.getElementById('res')
    var num = Number(nro.value)
    
    /*for(i=1;i<=10;i++){
        res.innerHTML += `${num} x ${i} = ${num * i} <br>`
    }*/
    var i = 1
    /*while(i <= 10){
        res.innerHTML += `${num} x ${i} = ${num * i} <br>`
        i++
    }*/
    do{
        res.innerHTML += `${num} x ${i} = ${num * i} <br>`
        i++
    }while(i <= 10)
}