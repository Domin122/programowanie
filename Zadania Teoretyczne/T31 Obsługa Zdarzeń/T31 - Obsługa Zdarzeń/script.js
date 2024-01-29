const p = document.querySelector("p")
const div = document.getElementById("data");

function Data(){
    div.innerHTML = new Date()
}

function Text(){
    div.innerHTML = `Data juz była ;)`
}

div.addEventListener("mouseover", Data)

div.addEventListener("mouseleave", function (){
    div.innerHTML = ""
    div.removeEventListener("mouseover", Data)
    div.addEventListener("mouseover", Text)
})
