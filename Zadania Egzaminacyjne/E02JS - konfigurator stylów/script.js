const prawy = document.querySelector('#prawy');

const Indigo = document.querySelector('#Indigo');
Indigo.addEventListener('click', function(){
    prawy.style.backgroundColor = 'indigo';
});

const Steelblue = document.querySelector('#Steelblue');
Steelblue.addEventListener('click', function(){
   prawy.style.backgroundColor = 'steelblue';
});

const Olive = document.querySelector('#Olive');
Olive.addEventListener('click', function(){
    prawy.style.backgroundColor = 'olive';
});

function kolor() {
    prawy.style.color = document.getElementById("mojkolor").value;
}

let procentField = document.getElementsByName("procent")[0];
procentField.addEventListener("blur", function() {
    let procentValue = procentField.value;
    let fontSizePercent = parseInt(procentValue.replace("%", ""));
    let rightBlock = document.getElementById("prawy");
    rightBlock.style.fontSize = fontSizePercent + "%";
});

let checkbox = document.getElementsByName("ramka")[0];
let image = document.getElementById("zdj");
checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        image.style.border = "solid white 1px";
    } else {
        image.style.border = "none";
    }
});


let radios = document.querySelectorAll('input[type="radio"]');
let list = document.querySelector('ul');
radios.forEach(function(radio) {
    radio.addEventListener('change', function() {
        if (radio.name === 'dysk' && radio.checked) {
            list.style.listStyleType = 'disc';
        } else if (radio.name === 'kwadrat' && radio.checked) {
            list.style.listStyleType = 'square';
        } else if (radio.name === 'okrąg' && radio.checked) {
            list.style.listStyleType = 'circle';
        }
    });
});

let opcje = [];
let opcjeInputs = document.querySelectorAll('input[name="opcje"]:checked');
for (let i = 0; i < opcjeInputs.length; i++) {
    opcje.push(opcjeInputs[i].value);
}
