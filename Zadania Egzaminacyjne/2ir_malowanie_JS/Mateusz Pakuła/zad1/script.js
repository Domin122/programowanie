const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    const powierzchnia = document.querySelector("#powierzchnia").value
    const wynik = document.createElement("p")
    document.querySelector("#wynik").innerHTML = `Liczba potrzebnych puszek: ${Math.ceil(powierzchnia/4)}`
})