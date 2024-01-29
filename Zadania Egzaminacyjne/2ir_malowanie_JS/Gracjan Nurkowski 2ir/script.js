const btn = document.querySelector('button')
const wynik = document.querySelector('#wynik')






btn.addEventListener('click', function (){
    let a = document.querySelector('#m2').value
    let c = a/4
    wynik.innerHTML = `Liczba potrzebnych puszek : ${Math.ceil(c)}`


})