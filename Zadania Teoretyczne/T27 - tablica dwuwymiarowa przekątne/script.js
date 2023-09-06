let wynik = document.querySelector(`#wynik`)
const btn = document.querySelector(`button`)

btn.addEventListener("click", function (){
    wynik.innerHTML = ``
    const wiersz = 3
    const kolumna = 3
    let tab = []

    for (let i = 0; i < wiersz; i++) {
        tab[i] = [];

        for (let j = 0; j < kolumna; j++) {
            tab[i][j] = Math.floor(Math.random() * 10);
            wynik.innerHTML += tab[i][j]
            if( j === 2){
                wynik.innerHTML += `<br>`
            }
        }

    }

    let suma1 = tab[0][0] + tab[2][2] + tab[1][1]
    let suma2 = tab[0][2] + tab[2][0] + tab[1][1]

    if(suma1>suma2){
        wynik.innerHTML += `Pierwsza przekątna(LG_PD) jest większa, wynosi ona ${suma1} a druga(LD_PG) ${suma2}`
    }
    else if(suma1<suma2){
        wynik.innerHTML += `Druga przekątna(LD_PG) jest większa, wynosi ona ${suma2} a pierwsza(LG_PD) ${suma1}`
    }
    else{
        wynik.innerHTML += `Przekątne mają tą samą wartość ${suma1}`
    }


})