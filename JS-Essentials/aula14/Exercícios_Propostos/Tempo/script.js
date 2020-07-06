function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()

    if(minuto<10){
        minuto = "0" + minuto
    }
    msg.innerHTML = `Agora são <strong>${hora}h${minuto}min</strong>`

    if(hora >= 0 && hora < 12){
        img.src = 'morning.png'
        document.body.style.background = '#EBC346'
    }else if(hora >= 12 && hora < 18){
        img.src='afternoon.png'    
        document.body.style.background = '#1856A8'
    }else{
        img.src = 'night.png'
        document.body.style.background = '#000000'
    }

}
