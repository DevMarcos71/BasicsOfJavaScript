function contar() {
    let init = document.getElementById('txtInit')
    let fim = document.getElementById('txtFim')
    let passo = document.getElementById('txtPasso')
    let res = document.getElementById('res')

    if (init.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Preencha Todos Campos!"
        res.style.color = 'red'
    } else {
        res.innerHTML="Contando: <br>"
        let i = Number(init.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            res.innerHTML="Valor inválido. O Passo será considerado 1! <br>"
            p=1
        }

        if (i < f) {
            for (let count = i; count <= f; count += p) { 
                res.innerHTML += ` ${count} \u{23E9}`
            }
        }else{
            for (let count = i; count >= f; count -= p) {
            res.innerHTML += `${count} \u{23E9}`
            }
        }

        res.innerHTML += `\u{1F3C1}`
    }

}