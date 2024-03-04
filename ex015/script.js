function verificar(){
    var data = new Date()
    var ano = data.getFullYear
    var f_ano = document.getElementById('txtano')
    var res = document.querySelector('div#res') 
    if(f_ano.value.length == 0 || f_ano > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else{
        window.alert('tudo ok!')
    }
}