const wynik = document.querySelector('#wynik')

const imie = prompt("Podaj swoje imię:")
const little = imie.toLowerCase()

if (little === "kuba" || little === "barnaba" || little[little.length - 1] !== "a") {
    wynik.innerHTML = "Jesteś mężczyzną."
} else {
    wynik.innerHTML = "Jesteś kobietą."
}