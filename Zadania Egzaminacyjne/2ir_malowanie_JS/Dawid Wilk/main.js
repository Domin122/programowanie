const btn = document.querySelector('button')
const wynik = document.querySelector('#wynik')
const powierz = document.querySelector('#metry')

btn.addEventListener("click", function () {
    let powierzchnia = powierz.value
    let ilosc = Math.ceil(powierzchnia / 4)
    wynik.innerHTML = 'Liczba potrzebnych puszek: ' + ilosc
})