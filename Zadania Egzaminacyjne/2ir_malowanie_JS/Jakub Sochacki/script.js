let przycisk = document.querySelector("button");
przycisk.addEventListener("click", function (){
    let powierzchnia = document.querySelector("#powierzchnia").value;
    let wynik = document.querySelector("#wynik")
    let liczbaPuszek = Math.ceil(powierzchnia/4);
    wynik.innerHTML = `Liczba potrzebnych puszek: ${liczbaPuszek}`;
})