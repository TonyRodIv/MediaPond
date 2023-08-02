
let result = document.getElementById('result')
let convert = document.getElementById('convert')
let title = document.getElementById('titulo')
let contResul = document.getElementById('contResul')
let elipses = document.getElementsByClassName('elipse');
contResul.style.display = 'none'
title.style.display = 'flex'

function mediaPonderada() {
    contResul.style.display = 'flex'
    title.style.display = 'none'
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
    for (let i = 0; i < elipses.length; i++) {
        if (media < 6) {
            elipses[i].style.backgroundColor = '#AB2929'
            convert.style.backgroundColor = '#934747'
        } else {
            elipses[i].style.backgroundColor = '#00747a'
            convert.style.backgroundColor = '#479385'
        }
    }
    return media;
}
