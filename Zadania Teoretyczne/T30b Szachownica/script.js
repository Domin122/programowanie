const btn = document.querySelector("button");

btn.addEventListener('click', function(){
    const rozmiar = document.getElementById("liczba").value;
    const szachownica = document.getElementById("szachownica");
    szachownica.innerHTML = "";

    for (let rzad = 0; rzad < rozmiar; rzad++) {
        for (let kolumna = 0; kolumna < rozmiar; kolumna++) {
            let place = document.createElement("div");
            place.style.width = (100 / rozmiar) + "%";
            place.style.paddingBottom = (100 / rozmiar) + "%";
            place.style.float = "left";
            if ((rzad + kolumna) % 2 === 0) {
                place.style.backgroundColor = "black";
            } else {
                place.style.backgroundColor = "white";
            }
            szachownica.appendChild(place);
        }
    }

});