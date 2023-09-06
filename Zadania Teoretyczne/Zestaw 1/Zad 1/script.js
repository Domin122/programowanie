const liczba_a = document.querySelector('#liczba_a');
const liczba_b = document.querySelector('#liczba_b');
const liczba_c= document.querySelector('#liczba_c');
const liczba_d = document.querySelector('#liczba_d');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let srednia;
    let a = parseInt(liczba_a.value);
    let b = parseInt(liczba_b.value);
    let c = parseInt(liczba_c.value);
    let d = parseInt(liczba_d.value);
    srednia = Math.pow(a*b*c*d,1/4)
    wynik.innerHTML=`Średnia geometryczna wynosi: ${srednia} `;
});