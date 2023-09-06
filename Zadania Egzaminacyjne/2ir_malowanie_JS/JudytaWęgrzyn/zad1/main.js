const sur = document.querySelector('#surface');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function (){

    let s = sur.value
    let puszka = s/4;
    let zaokr = Math.ceil(puszka)

    wynik.innerHTML = "Liczba potrzebnych puszek: "+zaokr
})