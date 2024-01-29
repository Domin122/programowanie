const formularz = document.getElementById('formularz');
const tableEl = document.getElementById('tablica');
const wynik = document.getElementById('wynik');

formularz.addEventListener('submit', function(event) {
    event.preventDefault();

    const table = [];
    for (let i = 1; i <= 10; i++) {
        const inputEl = document.getElementById(`znak${i}`);
        table.push(inputEl.value);


        const dlugosc = parseInt(document.querySelector('#dlugosc').value);
        const ilosc = parseInt(document.querySelector('#ilosc').value);


        tableEl.innerHTML = '<tr>' + table.map(char => `<td>${char}</td>`).join('') + '</tr>';

        let wygenerowaneslowa = [];
        for (let i = 0; i < ilosc; i++) {
            let slowo = '';
            for (let j = 0; j < dlugosc; j++) {
                const randomoweslowo = Math.floor(Math.random() * table.length);
                slowo += table[randomoweslowo];
            }
            wygenerowaneslowa.push(slowo);
        }

        wynik.textContent = wygenerowaneslowa.join(', ');
    }
});
