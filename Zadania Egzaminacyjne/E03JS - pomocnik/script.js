function generujPalete() {
    let skladowaH = document.getElementById("skladowa-h").value;
    let tabela = document.getElementsByTagName("table")[0];
    let wiersze = tabela.getElementsByTagName("tr");

    // Ustaw kolor główny
    wiersze[0].style.backgroundColor = "hsl(" + skladowaH + ", 100%, 50%)";

    // Ustaw pozostałe kolory
    let s = [1, 0.8, 0.6, 0.4, 0.2];
    for (let i = 0; i < 4; i++) {
        let komorki = wiersze[i+1].getElementsByTagName("td");
        for (let j = 0; j < komorki.length; j++) {
            komorki[j].style.backgroundColor = "hsl(" + skladowaH + ", " + (s[j]*100) + "%, 50%)";
        }
    }
}
