const wynik = document.querySelector('#wynik')

let name = prompt("Podaj imię i nazwisko:")
let [imie, nazwisko] = name.split(" ")
imie = imie.charAt(0).toUpperCase() + imie.slice(1).toLowerCase()
nazwisko = nazwisko.charAt(0).toUpperCase() + nazwisko.slice(1).toLowerCase()
wynik.innerHTML = `Twoje imie to: ${imie}, a nazwisko: ${nazwisko}`