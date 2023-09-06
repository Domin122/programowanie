
const btn = document.querySelector("button")
btn.addEventListener("click",()=>{
    const result = document.querySelector('#result')
    var powierzchnia = document.querySelector("#powierzchnia").value
    let puszki = Math.ceil(powierzchnia/4)
    result.innerHTML = "Liczba potrzebnych puszek:" + puszki})