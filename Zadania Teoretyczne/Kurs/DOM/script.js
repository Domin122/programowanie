/*window.USER = {
    name:"Jan",
    lastname:"Kowalski",
    email:"jankowalski@gmail.com"
};
console.log("To jest "+window.USER.name+" "+window.USER.lastname+" jego mail to "+window.USER.email);

console.log(window.navigator);
console.log(window.screen);
console.log(window.location);*/

const container = document.querySelector("#container");
const p = document.querySelector(".column p");
const allParagraphs = document.querySelectorAll("p");

const form = document.querySelector("#myForm");

const input = form.querySelector("[name='firstName']");

console.log(document.forms);
console.log(document.images);
console.log(document.links);

console.log(document.body);
console.log(document.documentElement);

document.getElementById("myForm");
document.getElementsByClassName("text");