const powierzchnia = document.querySelector('#powierzchnia');
const btn = document.querySelector('button');
const wyswietl = document.querySelector('#wyswietl');
const komorka = document.querySelector('td');

komorka.addEventListener('mouseover', function(){
    komorka.style.backgroundColor = "steelblue";
    komorka.style.color = "white";
})

komorka.addEventListener('mouseout', function(){
    komorka.style.backgroundColor = "#E0E9F1";
    komorka.style.color = "black";
})



btn.addEventListener('click',function(){
    let liczba_puszek = Math.ceil(parseFloat(powierzchnia.value)/4);
    wyswietl.innerHTML = `Liczba potrzebnych puszek: ${liczba_puszek}`;
})