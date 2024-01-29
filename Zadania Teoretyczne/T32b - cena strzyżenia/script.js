function obliczCene() {
    let dlugoscWlosow = document.querySelector('input[name="dlugosc-wlosow"]:checked').value;
    let cena = 0;
    switch(dlugoscWlosow) {
        case "krotkie":
            cena = 25;
            break;
        case "srednie":
            cena = 30;
            break;
        case "poldlugie":
            cena = 40;
            break;
        case "dlugie":
            cena = 50;
            break;
    }
    document.getElementById("wynik").innerHTML = "Cena strzyżenia: " + cena + " zł";
}
