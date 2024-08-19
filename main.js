
let result = document.getElementById('result')
let calculate = document.getElementById('calculate')
let title = document.getElementById('titulo')
let progressBar = document.getElementById('progressBar');
let resultCard = document.getElementById('resultCard');
resultCard.style.display = 'none'
console.log('algo')

function mediaPonderada() {
    let av1 = document.getElementById('av1').value
    let av2 = document.getElementById('av2').value
    let avt = document.getElementById('avt').value
    let peso1 = 2.5;
    let peso2 = 2.5;
    let peso4 = 5;
    let somaPesos = peso1 + peso2 + peso4;
    let media = (av1 * peso1 + av2 * peso2 + avt * peso4) / somaPesos;
    console.log(media)
    result.innerHTML = media.toFixed(2)
    let mediaRound = Math.round(media);
    console.log(`${mediaRound}0%`)
    resultCard.style.display = 'flex'
    if (media < 3) {
        progressBar.style.background = 'linear-gradient(90deg, rgba(195,81,81,1) 48%, rgba(202,140,98,1) 100%)'
        progressBar.style.width = `${mediaRound}0%`
    } else if (media < 6) {
        progressBar.style.background = 'linear-gradient(90deg, rgba(195,81,81,1) 29%, rgba(202,154,98,1) 69%)'
        progressBar.style.width = `${mediaRound}0%`

    } else if (media = 6) {
        progressBar.style.background = 'linear-gradient(90deg, rgba(195,81,81,1) 10%, rgba(202,179,98,1) 50%, rgba(137,181,170,1) 100%)'
        progressBar.style.width = `${mediaRound}0%`

    }else if (media < 8) {
        progressBar.style.background = 'linear-gradient(90deg, rgba(195,81,81,1) 14%, rgba(202,179,98,1) 80%, rgba(137,181,170,1) 100%)'
        progressBar.style.width = `${mediaRound}0%`

    } else if (media < 9.9) {
        progressBar.style.background = 'linear-gradient(90deg, rgba(195,81,81,1) 14%, rgba(202,179,98,1) 55%, rgba(111,182,212,1) 100%)'
        progressBar.style.width = `${mediaRound}0%`

    } else {
        progressBar.style.background = 'linear-gradient(90deg, rgba(195,81,81,1) 14%, rgba(202,179,98,1) 40%, rgba(111,182,212,1) 100%)'
        progressBar.style.width = `${mediaRound}0%`
    }
    return media;
}
