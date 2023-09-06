let a = document.querySelector(`#liczba_a`)
let btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    let a = parseInt(liczba_a.value);
    wynik.innerHTML = ``
    for (let i = 1; i <= a; i++) {
        wynik.innerHTML += "<br>";
        for (let j = 1; j <= i; j++) {
            wynik.innerHTML += "*";
        }
    }

})

