const wynik = document.querySelector("#wynik");
const form = document.querySelector("#form");
const btn = document.querySelector("#prześlij");

form.addEventListener('submit', function(event) {
    event.preventDefault();
});

btn.addEventListener("click", () => {
    const imie = form.imie.value
    const nazwisko = form.nazwisko.value
    let email = form.email.value
    const usluga = form.usluga.value
    const kopia = form.kopia.checked

    email = email.toLowerCase()

    wynik.innerHTML = `${imie} ${nazwisko}<br>${email}<br>Usługa: ${usluga}`

})