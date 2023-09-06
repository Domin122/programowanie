const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
    wynik.innerHTML = ``
    const wiersz = 4
    const kolumna = 4
    let tab = []

    for (let i = 0; i < wiersz; i++) {
        tab[i] = [];

        for (let j = 0; j < kolumna; j++) {
            tab[i][j] = Math.floor(Math.random() * 2);
            wynik.innerHTML += tab[i][j]
            if( j === 3){
                wynik.innerHTML += `<br>`
            }
        }
    }
    let suma1= tab[0][0] + tab[0][1] + tab[0][2] + tab[0][3]
    let suma2= tab[1][0] + tab[1][1] + tab[1][2] + tab[1][3]
    let suma3= tab[2][0] + tab[2][1] + tab[2][2] + tab[2][3]
    let suma4= tab[3][0] + tab[3][1] + tab[3][2] + tab[3][3]

    wynik.innerHTML += "Wiersze o największych sumach<br>"
    if(suma1>=suma2 && suma1>=suma3 && suma1>=suma4){
        wynik.innerHTML += "Wiersz Pierwszy: "+tab[0]+"<br>";
    }
    if(suma2>=suma1 && suma2>=suma3 && suma2>=suma4){
        wynik.innerHTML += "Wiersz Drugi: "+tab[1]+"<br>";
    }
    if(suma3>=suma2 && suma3>=suma1 && suma3>=suma4){
        wynik.innerHTML += "Wiersz Trzeci: "+tab[2]+"<br>";
    }
    if(suma4>=suma2 && suma4>=suma3 && suma4>=suma1){
        wynik.innerHTML += "Wiersz Czwarty: "+tab[3]+"<br>";
    }
    let odwroconaTab = [];

    for (let i = 0; i < kolumna; i++) {
        odwroconaTab[i] = [];

        for (let j = wiersz - 1; j >= 0; j--) {
            odwroconaTab[i][wiersz - j - 1] = tab[j][i];
        }
    }

    wynik.innerHTML += "Odwrócona tablica:(90 stopni)<br>";
    for (let i = 0; i < kolumna; i++) {
        for (let j = 0; j < wiersz; j++) {
            wynik.innerHTML += odwroconaTab[i][j];
        }
        wynik.innerHTML += "<br>";
    }



});