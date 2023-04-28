
let result = document.getElementById('result')
let contResul = document.getElementById('contResul')
let notaFinal = document.getElementById('notaFinal')
contResul.style.display = 'none'

function mediaPonderada() {
    contResul.style.display = 'flex'
    let av1 = document.getElementById('av1').value
    let av2 = document.getElementById('av2').value
    let av3 = document.getElementById('av3').value
    let avt = document.getElementById('avt').value
    let peso1 = 2.5;
    let peso2 = 2.5;
    let peso3 = 2;
    let peso4 = 3;
    let somaPesos = peso1 + peso2 + peso3 + peso4;
    let media = (av1 * peso1 + av2 * peso2 + av3 * peso3 + avt * peso4) / somaPesos;
    console.log(media)
    result.innerHTML = media.toFixed(2)
    if(media<6){
        notaFinal.style.color = '#630101'
    }else{
        notaFinal.style.color = '#015658'
    }
    return media;
}
