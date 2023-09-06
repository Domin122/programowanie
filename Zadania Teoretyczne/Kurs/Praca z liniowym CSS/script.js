const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
const p = container.querySelectorAll("p");
const link = container.querySelector("a");
const list = document.querySelector("#list");

const children = list.childNodes;
const elementChildren = list.children;
const first = list.firstChild;
const firstElement = list.firstElementChild;
const last = list.lastChild;
const lastElement = list.lastElementChild;
const lastButOne = lastElement.previousSibling;
const lastButOneElement = lastElement.previousElementSibling;
const parentElement = firstElement.parentNode;

firstElement.style.color = "#ff0000";
lastButOneElement.style.color = "#ffff00";
lastElement.style.color= "#00ff00";

h1.style.color = "#ff0000";
h1.style.fontSize = "20px";

container.style.cssText = "width: 600px; margin: 0 auto;";

for(let i = 0; i < p.length; i++) {
    p[i].style.lineHeight = "30px";
}

link.style.display = "block";
// link.style.display = "";

console.log(link.style.color);

console.log(window.getComputedStyle(link).fontSize);