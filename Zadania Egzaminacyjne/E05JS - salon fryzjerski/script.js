const form = document.querySelector("#strzyżenie");
form.addEventListener('submit', function(event) {
    event.preventDefault();
});


const btn = document.querySelector(`button`);
const wynik = document.querySelector(`#wynik`);
btn.addEventListener("click", function() {

    let form = document.getElementById("strzyżenie");
    let wybor = form.elements["opcje"].value;
    let cena = 0;

    switch (wybor) {
        case "krótkie":
            cena = 25;
            break;
        case "średnie":
            cena = 30;
            break;
        case "półdługie":
            cena = 40;
            break;
        case "długie":
            cena = 50;
            break;
    }

    wynik.innerHTML = "Cena strzyżenia: " + cena + " zł";

});

