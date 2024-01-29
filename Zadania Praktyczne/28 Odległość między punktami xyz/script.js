const l_x1 = document.querySelector('#x1');
const l_y1 = document.querySelector('#y1');
const l_z1 = document.querySelector('#z1');
const l_x2 = document.querySelector('#x2');
const l_y2 = document.querySelector('#y2');
const l_z2 = document.querySelector('#z2');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let x1 =parseInt(l_x1.value);
    let y1 =parseInt(l_y1.value);
    let z1 =parseInt(l_z1.value);
    let x2 =parseInt(l_x2.value);
    let y2 =parseInt(l_y2.value);
    let z2 =parseInt(l_z2.value);

    let p = Math.pow(x1-x2,2) + Math.pow(y1-y2,2)  + Math.pow(z1-z2,2)
    let d = Math.sqrt(p);

    wynik.innerHTML = `x1 = ${x1}<br>`
    wynik.innerHTML += `y1 = ${y1}<br>`
    wynik.innerHTML += `z1 = ${z1}<br>`
    wynik.innerHTML += `x2 = ${x2}<br>`
    wynik.innerHTML += `y2 = ${y2}<br>`
    wynik.innerHTML += `z2 = ${z2}<br>`
    wynik.innerHTML += `Odległość między tymi punktami wynosi:${d} <br>`



});