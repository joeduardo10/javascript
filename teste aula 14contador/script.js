function calcular(){
   var ini = document.getElementById('id_inicio')
   var fim = document.getElementById('id_fim')
   var pass = document.getElementById('id_passo')
   var res = document.querySelector('div#res')
   var inicio = Number(ini.value)
   var final = Number(fim.value)
   var passo = Number(pass.value)
    if(ini.value.length  == 0 || Number(ini.value) == 0 ||
       fim.value.length  == 0 || Number(fim.value) == 0 ||
       pass.value.length  == 0 || Number(pass.value) == 0 ){
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    }else{
        /*for(i=inicio; i <= final; i+= passo){
            res.innerHTML += `${i}`
        }*/
       /* 
       // com while
        while(inicio <= final){
            res.innerHTML += inicio
            inicio+=passo 
        }*/
        do{
            res.innerHTML += `👉 ${inicio }`
            inicio+=passo 
        }while(inicio <= final)

    }
 }