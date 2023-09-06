function obliczCene() {
    let imieNazwisko = document.getElementById("imie_nazwisko").value;
    let email = document.getElementById("email").value;
    let telefon = document.getElementById("Telefon").value;
    let opis = document.getElementById("opis").value;
    let kolor = document.querySelector('input[name="kolor"]:checked').value;
    let opcje = [];
    let opcjeInputs = document.querySelectorAll('input[name="opcje"]:checked');
    for (let i = 0; i < opcjeInputs.length; i++) {
        opcje.push(opcjeInputs[i].value);
    }
    let rozmiary = document.getElementById("rozmiary").value;

    document.getElementById("wynik").innerHTML = "Imię i nazwisko: " + imieNazwisko + "<br>" +
        "E-Mail: " + email + "<br>" +
        "Telefon: " + telefon + "<br>" +
        "Opis butów: " + opis + "<br>" +
        "Kolor: " + kolor + "<br>" +
        "Opcje: " + opcje.join(", ") + "<br>" +
        "Rozmiar: " + rozmiary;
}

document.getElementById("reset").addEventListener("click", function(){
    location.reload();
});
