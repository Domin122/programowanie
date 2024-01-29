let wynik = document.querySelector('#wynik');
let btn = document.querySelector('button');
btn.addEventListener('click', function() {

function podatek(cena,typ) {
    if (cena<200) {
        let pod = 0;
        wynik.innerHTML = `Cena:${cena},Typ: ${typ},Podatek: ${pod}`
        console.log(cena,typ,pod)
    } else {
        if (cena <= 1000) {
            if (typ === "d") {
                let pod = cena * (0.15 - 0.05)
                wynik.innerHTML = `Cena:${cena},Typ: ${typ},Podatek: ${pod}`
                console.log(cena,typ,pod)
            } else {
                let pod = cena * 0.15
                wynik.innerHTML = `Cena:${cena},Typ: ${typ},Podatek: ${pod}`
                console.log(cena,typ,pod)
            }
        } else {
            if (typ === "d") {
                let pod = cena * (0.22 - 0.05)
                wynik.innerHTML = `Cena:${cena},Typ: ${typ},Podatek: ${pod}`
                console.log(cena,typ,pod)
            } else {
                let pod = cena * 0.22
                wynik.innerHTML = `Cena:${cena} , Typ: ${typ}, Podatek: ${pod}`
                console.log(cena,typ,pod)
            }
        }
    }
}
podatek(100,"d");

});

;