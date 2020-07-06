function verifica() {
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)

        var genero = ' ' 

        var img = document.createElement('img') 
        img.setAttribute('id', 'foto') 
        
      
        if (fsex[0].checked) {
            genero = 'Homem'  
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'ft-menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'ft-homemJovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'ft-adultoHomem.png')
            } else {
                img.setAttribute('src', 'ft-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'ft-menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'ft-mulherJovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'ft-adultoMulher.png')
            } else {
                img.setAttribute('src', 'ft-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}



