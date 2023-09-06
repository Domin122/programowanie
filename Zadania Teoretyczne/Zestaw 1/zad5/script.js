let a = document.querySelector(`#liczba_a`)
let btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    let a = parseInt(liczba_a.value);
    wynik.innerHTML = ``
    let tablica = [];
    for (let i = 0; i < 10; i++) {
        let liczba = parseInt(prompt(`Podaj ${i+1}. liczbę:`));
        tablica.push(liczba);
    }

    wynik.innerHTML +=`Zawartość tablicy: `;
    wynik.innerHTML +=`${tablica} <br>`;

    let sumaParzystych = 0;
    for (let i = 0; i < tablica.length; i++) {
        if (tablica[i] % 2 === 0) {
            sumaParzystych += tablica[i];
        }
    }

    wynik.innerHTML +=`Suma liczb parzystych: ${sumaParzystych}`;
})