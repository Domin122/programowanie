const wynik = document.querySelector("#wynik")
const btn = document.querySelector("button")

btn.addEventListener("click", ()=>
{
    const powierzchnia = document.querySelector("input").value

    const litry = powierzchnia/4

    const puszki = litry >= 0 ? Math.ceil(litry) : 0

    wynik.innerHTML = `Liczba potrzebnych puszek: ${puszki}`

})