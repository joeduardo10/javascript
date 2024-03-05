function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var f_ano = document.getElementById('txtano')
    var res = document.querySelector('div#res') 
    if(f_ano.value.length == 0 || f_ano > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(f_ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/menino.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovemhomem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adultohomem.png')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/velhohomem.png')
            }
        }else if(fsex[1].checked){
                genero = 'Mulher'
            }
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/menina.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovemmulher.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adultomulher.png')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/velhamulher.png')
            }
            
            res.style.textAlign = 'center'
            res.innerHTML = `detectamos ${genero} com ${idade} anos`
            res.appendChild(img)
    }
}