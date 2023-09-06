const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
    wynik.innerHTML = "";
    const tablica = [];
    for (let i = 0; i < 7; i++) {
        const wiersz = [];
        for (let j = 0; j < 7; j++) {
            const znak = String.fromCharCode(Math.floor(Math.random() * 5) + 97);
            wiersz.push(znak);
        }
        tablica.push(wiersz);
    }

    for (const wiersz of tablica) {
        wynik.innerHTML += wiersz.join(" ") + "<br>";
    }

    let aCount = 0;
    for (const wiersz of tablica) {
        aCount += wiersz.filter((znak) => znak === "a").length;
    }
    wynik.innerHTML += `Liczba wystąpień litery 'a': ${aCount}<br>`;

    const bCount = [0, 0, 0, 0, 0, 0, 0];
    for (const wiersz of tablica) {
        const indexWiersza = tablica.indexOf(wiersz);
        const count = wiersz.filter((znak) => znak === "b").length;
        bCount[indexWiersza] = count;
    }

    const maxB = Math.max(...bCount);
    if (maxB === 0) {
        wynik.innerHTML += "W tablicy nie ma litery 'b'.<br>";
    } else {
        wynik.innerHTML += "Najwięcej liter 'b' wystąpiło w wierszach o numerach: ";
        for (let i = 0; i < bCount.length; i++) {
            if (bCount[i] === maxB) {
                wynik.innerHTML += i+1 + " ";
            }
        }
    }
});
