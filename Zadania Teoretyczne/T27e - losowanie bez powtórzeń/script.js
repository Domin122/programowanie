const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {

    let table = new Array(7);
    for (let i = 0; i < table.length; i++) {
        table[i] = new Array(7);
    }

    let usedNumbers = [];
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].length; j++) {
            let number;
            do {
                number = Math.floor(Math.random() * 90) + 10;
            } while (usedNumbers.includes(number));
            table[i][j] = number;
            usedNumbers.push(number);
        }
    }

    let tableHTML = "";
    for (let i = 0; i < table.length; i++) {
        tableHTML += table[i].join(" ") + "<br>";
    }
    wynik.innerHTML = tableHTML;

})