const btn = document.querySelector('#policz-button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', function(){
   let powierzchnia = document.querySelector('#powierzchnia').value;
   let litr_farby = 4;
   let liczba_puszek = Math.ceil(powierzchnia / litr_farby);
   wynik.innerHTML = `Liczba potrzebnych puszek: ${liczba_puszek}`;
});