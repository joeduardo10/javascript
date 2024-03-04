function carregar(){
    var msg = window.document.getElementById('msg')
    var img =window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas`
    if(hora >= 0 && hora < 12){
        img.src = "imagens/manha1.png" /*Bom dia*/
        window.document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18){
        img.src = "imagens/tarde.png" /*Boa tarde */
        document.body.style.background = '#b9846f'
    }else{
        img.src = "imagens/noite.png" /*Boa Noite */
        document.body.style.background = '#515154'
    }
    
}
