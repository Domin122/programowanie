let idZamowienia = 0;

function zaznaczBraki() {
    const tabela = document.getElementById('tabela');
    const wiersze = tabela.querySelectorAll('tr');

    wiersze.forEach((wiersz, index) => {
        if (index === 0) return;

        const dostepnaIloscKomorka = wiersz.cells[2];
        const dostepnaIlosc = parseInt(dostepnaIloscKomorka.textContent);

        if (dostepnaIlosc === 0) {
            dostepnaIloscKomorka.style.backgroundColor = 'red';
        } else if (dostepnaIlosc >= 1 && dostepnaIlosc <= 5) {
            dostepnaIloscKomorka.style.backgroundColor = 'yellow';
        } else {
            dostepnaIloscKomorka.style.backgroundColor = 'honeydew';
        }
    });
}

function aktualizujIlosc(index) {
    const nowaIlosc = prompt('Podaj nową ilość:');
    if (nowaIlosc !== null) {
        const tabela = document.getElementById('tabela');
        const wiersz = tabela.rows[index + 1];
        const dostepnaIloscKomorka = wiersz.cells[2];
        dostepnaIloscKomorka.textContent = nowaIlosc;
        zaznaczBraki();
    }
}

function zamowienie(nazwaProduktu, index) {
    idZamowienia++;
    alert(`Zamówienie nr: ${idZamowienia} Produkt: ${nazwaProduktu}`);
}

zaznaczBraki();
