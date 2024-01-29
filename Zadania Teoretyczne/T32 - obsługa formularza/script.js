const wynik = document.querySelector("#wynik");
const form = document.querySelector("#form");
const btn = document.querySelector("button");



form.addEventListener('submit', function(event) {
    event.preventDefault();
    wyswietl(form)
});

function wyswietl(form){
    let zadowolenie = form.zadowolenie.value
    let data = form.data.value
    let kolor = form.kolor.value

    let z = "ocena kolorem"
    wynik.innerHTML += 'Usługę wykonano: ' +data
    wynik.innerHTML += '<br><br> Ocena Klienta: ' + zadowolenie
    wynik.innerHTML += '<br><br>' + z.fontcolor(kolor)
    let h1 = document.getElementsByTagName('H1');
    h1.style.color = kolor
}