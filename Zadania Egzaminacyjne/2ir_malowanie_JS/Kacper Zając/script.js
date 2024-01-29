const btn = document.querySelector("button")
const input = document.querySelector("#input")
const wynik = document.querySelector("#wynik")

btn.addEventListener("click", function (){
    powierzchnia = input.value
    min = Math.ceil(powierzchnia / 4)
    wynik.innerHTML = `Liczba potrzebnych puszek: ${min}`
})